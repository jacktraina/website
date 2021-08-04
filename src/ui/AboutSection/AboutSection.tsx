import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './AboutSection.module.css';

interface Props {
    title: string,
    bullets: any[],
    icon: any,
}

export default function AboutSection({ icon, title, bullets } : Props) {
    return (
        <div className={classes.aboutSection}>
            <div className={classes.sectionTitle}>
                <div className={classes.title}>{title}</div>
            </div>
            <ul>
                {bullets.map(bullet => <li><FontAwesomeIcon icon={bullet.icon ?? icon} size="xs" color="#097fd3" className={classes.icon}/><span className={classes.book}>{bullet.title}{bullet.author && ','}</span>{bullet.author}</li>)}
            </ul>
        </div>
    )
}
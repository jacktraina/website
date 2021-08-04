import React from 'react';

import classes from './Socials.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contactData from '../../data/contact';

interface Props {
    description: string,
    icon: any,
    color?: string,
    background: string,
    link: string,
}

export const SocialRow = ({ description, icon, color, background, link } : Props) => {
    return (
        <div className={classes.socialRow}>
            <a className={classes.iconWrapper} style={{backgroundColor: background}} href={link} target="_blank"><FontAwesomeIcon icon={icon} size="2x" color={color ?? "white"} className={classes.icon} /></a>
            <div className={classes.description}>{description}</div>
        </div>
    )
}

export default function Socials() {
    return(
        <div className={classes.socialWrapper}>
            <div className={classes.socialContainer}>
                {contactData.map(c => (
                    <SocialRow description={c.description} icon={c.icon} background={c.background} color={c.color} link={c.link}/>
                ))} 
            </div>
        </div>
    )
}
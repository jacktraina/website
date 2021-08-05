import React from 'react'

import classes from './Project.module.css'
import { getMonthYear } from '../../utils'

interface Props {
    title: string,
    date?: Date,
    img?: any,
    description?: string,
    link?: string,
}

export default function Project({ title, date, img, description, link } : Props) {
    return (
        <div className={classes.projectContainer}>
            <header>
                <div className={classes.title}>{title}</div>
                <div className={classes.date}>{date && getMonthYear(date)}</div>
            </header>
            <div className={classes.imageContainer}>
                <a href={link} target="_blank" rel="noreferrer"><img src={img} className={classes.projectImage} alt={title}/></a>
            </div>
            <div className={classes.projectDescription}>{description}</div>
        </div>
    )
}
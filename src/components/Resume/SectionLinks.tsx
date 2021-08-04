import React from 'react'

import classes from './Resume.module.css';

export default function SectionLinks() {
    return (
        <div className={classes.subheadings}>
            <a href="#education" className={classes.headerLink}>Education</a>
            <a href="#experience" className={classes.headerLink}>Experience</a>
            <a href="#skills" className={classes.headerLink}>Skills</a>
            <a href="#courses" className={classes.headerLink}>Courses</a>
        </div>
    )
}
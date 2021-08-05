import React from 'react';
import classes from './Resume.module.css';

import experienceData from '../../data/resume/experience'
import ExperienceSection from '../../ui/ExperienceSection/ExperienceSection';

export default function Experience() {
    return (
        <div className={classes.experienceContainer} id="education">
            <div className={classes.sectionTitle}>Experience</div>
            {experienceData.map(exp => (
                <ExperienceSection key={exp.company} title={exp.company} subtitles={exp.positions} topRight={exp.dateRanges} bullets={exp.bullets} link={exp.link} imageURL={exp.imageURL} color={exp.color}/>
            ))}
        </div>
    )
}
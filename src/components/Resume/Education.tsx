import React from 'react';
import classes from './Resume.module.css';

import educationData from '../../data/resume/education'
import EducationSection from '../../ui/EducationSection/EducationSection';

export default function Education() {
    return (
        <div className={classes.experienceContainer} id="experience">
            <div className={classes.sectionTitle}>Education</div>
            {educationData.map((edu, i) => (
                <EducationSection key={i} school={edu.school} description={edu.description} year={edu.date} link={edu.link} multiline={edu.multiline}/>
            ))}
        </div>
    )
}
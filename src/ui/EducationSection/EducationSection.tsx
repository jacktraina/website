import React, { useContext } from 'react';
import classes from './EducationSection.module.css';
import { getMonthYear } from '../../utils';
import { DeviceSizeContext } from '../../Contexts'

interface EducationSectionProps {
    school?: string,
    description?: string,
    year?: Date,
    link?: string,
    multiline?: string[],
}

export default function EducationSection( props : EducationSectionProps) {
    const { mobileSizeClass } = useContext(DeviceSizeContext);
    const { school, description, year, link, multiline } = props;

    if(!props) return <></>
    return (
        <div className={classes.sectionContainer}>
            <div className={classes.contentContainer}>
                {school && <div className={classes.school}><a className={classes.link} href={link}>{school}</a></div>}
                {mobileSizeClass && year &&
                    <div className={classes.subtitle}>
                        {multiline?.map(line => <div>{line}</div>)}
                        {getMonthYear(year)}
                    </div>}
                {!mobileSizeClass && description && year && <div className={classes.subtitle}>{description}, {getMonthYear(year)}</div>}
            </div>
        </div>
    )
}
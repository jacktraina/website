import React from 'react';
import classes from './ExperienceSection.module.css';

interface ExperienceSectionProps {
    title?: string;
    subtitles?: string[];
    topRight?: string[];
    bullets?: string[][];
    descriptions?: string[];
    link?: string;
    imageURL?: any;
    color?: string;
}

const formatBullets = ( bulletPoints : string[]) => {
    return (
        <ul className={classes.bulletsContainer}>
            {bulletPoints.map(bullet => <li className={classes.bullet}>{bullet}</li>)}
        </ul>
    )
}

interface SubSectionProps {
    subtitle: string,
    topRight: string,
    bullets: string[],
}

const SubSection = ({ subtitle, topRight, bullets} : SubSectionProps) => (
    <div className={classes.subsection}>
        <div className={classes.topLine}>
            <div className={classes.subtitle}>{subtitle}</div>
            <div className={classes.topRight}>{topRight}</div>
        </div>
        {formatBullets(bullets)}
    </div>
)

export default function ExperienceSection( props : ExperienceSectionProps) {
    if(!props) return <></>
    const { title, subtitles, topRight, bullets, link, imageURL, color } = props;
    return (
        <div className={classes.sectionContainer}>
            <div className={classes.imageContainer}>
                <img width="100" height="100" style={{objectFit: "contain"}} alt={title} src={imageURL} className={classes.expImage}/>
            </div>
            <div className={classes.contentContainer} style={{borderLeft: 'solid', borderColor: color}}>
                {title && <div className={classes.title}><a className={classes.link} href={link}>{title}</a></div>}
                {subtitles?.map((sub, i) => <SubSection subtitle={sub} topRight={(topRight && topRight[i]) ?? ''} bullets={(bullets && bullets[i]) ?? ['']}/>)}
            </div>
        </div>
    )
}
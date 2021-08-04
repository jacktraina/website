import React from 'react';

import jack from '../../assets/headshot.jpg';

import classes from './Bio.module.css';
import bioText from '../../data/bio';
import { NavButton } from '../../ui/Button/Button';
import { useLocation } from 'react-router-dom';
import { Location } from 'history';

const TopSection = () => {
    return (
        <div className={classes.topContainer}>
            <img src={jack} className={classes.profilePicture}/>
            <div className={classes.bioName}>Jack Traina</div>
            <a href="mailto:jacktraina@college.harvard.edu" className={classes.bioEmail}>jacktraina@college.harvard.edu</a>
        </div>
    )
}

interface AboutProps {
    location?: Location;
}

const AboutSection = ({ location } : AboutProps ) => {
    return (
        <div className={classes.aboutWrapper}>
            <div className={classes.aboutTitle}>About Me</div>
            {bioText.map(text => <div className={classes.aboutDescription}>{text}</div>)}
            <NavButton text={location?.pathname === "/resume" ? "About me" : "Learn more"} to={location?.pathname === "/resume" ? "/about" : "/resume"}/>
        </div>

    );
}

export default function Bio() {
    let location = useLocation();

    return (
        <div className={classes.bioContainer}>
            <TopSection />
            <AboutSection location={location}/>
        </div>
    )
}
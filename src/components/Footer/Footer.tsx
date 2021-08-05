import React from 'react';
import classes from './Footer.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contactData from '../../data/contact';

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <ul className={classes.socialContainer}>
                    {contactData.map(c => (
                        <li key={c.label} className={classes.icon}>
                            <a href={c.link} className={classes.icon} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={c.icon} size="lg" className={classes.icon}/>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className={classes.copyright}>
                    <div>© Jack Traina <a href="/home">jacktraina.com</a></div>
                </div>
                
            </div> 
        </footer>
    )
}
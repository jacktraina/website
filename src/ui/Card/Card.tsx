import React from 'react';

import classes from './Card.module.css';
import classnames from 'classnames'
;
interface CardProps {
    children?: React.ReactNode,
    title?: string,
    subtitle?: React.ReactElement,
    id?: string,
    className?: string,
}

export default function Card({ children, title, subtitle, id, className } : CardProps) {
    return (
        <div className={classnames(classes.cardContainer, className ?? '')} id={id}>
            <div className={classes.title}>{title}</div>
            <div className={classes.subtitle}>{subtitle}</div>
            <div className={classes.bodyContainer}>
                {children}
            </div>
        </div>
    )
} 
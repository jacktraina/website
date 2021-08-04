import React from 'react';

import classes from './Container.module.css';

interface Props {
    children?: React.ReactNode;
}

export default function Container ({ children } : Props) {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}
import React from 'react';

import classes from './Button.module.css';
import classnames from 'classnames'

import { Link } from 'react-router-dom';

interface ButtonProps {
    className?: string,
    onClick?: () => void,
    text?: string;
    to?: string;
}

export function Button({ className, onClick, text } : ButtonProps) {
    return (
        <div className={classnames(classes.buttonWrapper)}>
            <button className={classnames(className ?? classes.aboutButton)} onClick={onClick}>{text}</button>
        </div>
    )
}

export function NavButton({ className, onClick, text, to } : ButtonProps) {
    return (
        <div className={classnames(classes.buttonWrapper)}>
            <Link to={to ?? ''}><button className={classnames(className ?? classes.aboutButton)} onClick={onClick}>{text}</button></Link>
        </div>
    )
}
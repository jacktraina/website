import React, { useState } from 'react'
import classnames from 'classnames'

import classes from './Backdrop.module.css'

interface BackdropProps {
    show: boolean,
    changeBackdrop?: () => void,
}

export default function Backdrop({ show, changeBackdrop } : BackdropProps) {    
    return (
        <div className={classnames(classes.backdrop, show ? classes.fadeIn : classes.fadeOut)}/>
    )
}
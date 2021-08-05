import React from 'react'

import classes from './Modal.module.css'

import Backdrop from '../Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/pro-regular-svg-icons'

interface Props {
    children?: React.ReactNode,
    show: boolean,
    onClose?: () => void,
}

export default function Modal({ children, show, onClose } : Props) {    
    const handleClose = () => {
        onClose && onClose()
    }
    
    return (
        <React.Fragment>
            {show ?
            <div>
                <Backdrop show={show}/>
                <div className={classes.modal}>
                    {children}
                    <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={classes.closeButton}/>
                </div>
            </div>
            : null
            }
        </React.Fragment>
    )
}
import React, { useEffect, useState, useRef } from 'react';
import classes from './Sidebar.module.css';
import cx from 'classnames';

import Backdrop from '../../ui/Backdrop/Backdrop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useOutsideClick } from '../../utils';
import routes from '../../data/routes';
import { Link } from 'react-router-dom'

interface SidebarProps {
    showSidebar: boolean,
    handleSidebar: () => void,
}

interface SidebarItemProps {
    children: React.ReactChild
}

interface CloseIconProps {
    onClick: () => void,
}

export const SidebarItem = ({ children } : SidebarItemProps) => {
    return (
        <a>{children}</a>
    )
}

const CloseIcon = ({ onClick } : CloseIconProps) => {
    return (
        <div onClick={onClick} className={classes.closeIconContainer}>
            <FontAwesomeIcon icon={faTimes}/>
        </div>
    )
}

export default function Sidebar({ showSidebar, handleSidebar } : SidebarProps) {
    const [slide, setSlide] = useState(showSidebar);
    const ref = useRef(null);

    const handleClose = () => {
        setSlide(false);
        setTimeout(() => {
            handleSidebar()
        }, 400)
    }

    useOutsideClick(ref, () => handleClose());

    return (
    <div>
        <Backdrop show={slide}/>
        <div ref={ref} className={cx(classes.sidebarContainer, slide ? classes.slideIn : classes.slideOut)}>
            <div className={classes.sidebarLinks}>
                <ul>
                    {routes.map((l, i) => (
                        <li key={i}>
                            <Link to={l.path} className={l.index ? classes.title : ''}>{l.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <CloseIcon onClick={handleClose}/>
        </div> 
    </div>
    )
}
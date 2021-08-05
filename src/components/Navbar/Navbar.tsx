import React, { useContext } from 'react';
import classnames from 'classnames'

import classes from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { DeviceSizeContext } from '../../Contexts'
import routes from '../../data/routes' 
import { Link } from 'react-router-dom'

interface NavbarProps {
    openSidebar: () => void;
    selectedTab: number;
}

export const NavbarItem = ( props : React.HTMLProps<HTMLElement>) => {
    return (
        <div className={classnames(classes.navbarItem, props.className)}>
            {props.children}
        </div>
    )
}

export const HamburgerMenu = ({ onClick } : React.HTMLProps<HTMLElement>) => {
    return (
        <div onClick={onClick} className={classnames(classes.hamburgerMenu)}>
            <FontAwesomeIcon icon={faBars}/>
        </div>
    );
}

interface DesktopProps {
    selectedTab: number,
}

const DesktopNavbar = ({ selectedTab } : DesktopProps) => {
    return (
        <div className={classes.navLinks}>
            <ul>
                {routes.filter(r => !r.index).map((l, i) => (
                    <li key={i}>
                        <Link to={l.path} className={i === selectedTab ? classes.bold : ''}>{l.label}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function Navbar({ openSidebar, selectedTab } : NavbarProps) {
    const { mobileSizeClass } = useContext(DeviceSizeContext);

    return (
        <div className={classnames(classes.navbar)}>
            <NavbarItem className={classes.titleContainer}><Link className={classes.navbarTitle} to="/home">Jack Traina</Link></NavbarItem>
            { mobileSizeClass
            ? <NavbarItem><HamburgerMenu onClick={openSidebar}/></NavbarItem>
            : <DesktopNavbar selectedTab={selectedTab}/>
            }
        </div>
    );
}

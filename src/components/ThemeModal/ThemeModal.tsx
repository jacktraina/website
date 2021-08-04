import React, { useState } from 'react';

import classes from './ThemeModal.module.css';

import Modal from '../../ui/Modal/Modal';
import themeData from '../../data/theme';

interface Props {
    onClose: () => void,
    show: boolean,
}

export default function ThemeModal({ onClose, show } : Props) {
    
    
    return (
        <Modal onClose={onClose} show={show}>
            <div className={classes.themeWrapper}>
                <ul>
                {themeData.map(theme => <li><ThemeBanner name={theme.name} background={theme.bg} color={theme.color} hoverBackground={theme.hoverBg}/></li>)}
                </ul>
            </div>
        </Modal>
    )
}

interface BannerProps {
    name: string,
    background: any,
    color?: string,
    hoverBackground: any,
}

const ThemeBanner = ({ name, background, color, hoverBackground } : BannerProps) => {
    const [currentImg, setCurrentImg] = useState(background)
    return (
        <div className={classes.headerContainer}>
            <div className={classes.headerTitle} style={{color: color ?? 'black'}}>{name}</div>
            <img className={classes.headerImg} src={currentImg} onMouseEnter={() => setCurrentImg(hoverBackground)} onMouseOut={() => setCurrentImg(background)}/>
        </div>
    )
}
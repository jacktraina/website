import React, { useState } from 'react';

import classes from "./Layout.module.css";

import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Aux from '../../hoc/Aux';
import Footer from '../Footer/Footer';

import Bio from '../Bio/Bio';

interface LayoutProps {
    children?: React.ReactNode;
    selectedTab: number;
}

export default function Layout( { children, selectedTab } : LayoutProps) {
    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }
    
    return (
        <Aux>
            <Navbar openSidebar={handleSidebar} selectedTab={selectedTab}/>
            {showSidebar && <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar}/>}
            <div className={classes.layoutWrapper}>
                <Bio />
                <div id="main" className={classes.main}>{children}</div>
            </div>
            <Footer />
        </Aux>
    );
}
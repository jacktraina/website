import React, { useState } from 'react'

import Layout from '../components/Layout/Layout';
import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';
import classes from './Pages.module.css';
import { Link } from 'react-router-dom';
import ThemeModal from '../components/ThemeModal/ThemeModal';

const Home = () => {
    const[openModal, setOpenModal] = useState(false);
    
    return (
        <Layout selectedTab={-1}>
            <Container>
                <Card title="About this site" subtitle={<div className={classes.subtitle}>A beautiful, sleek React application designed in Figma and built with modern Javascript</div>}>
                <div className={classes.homeText}>
                    <div>
                        Welcome! This website serves as my personal and professional portfolio. Feel free to explore and learn a little more <Link to="/about">about me</Link>, check out my <Link to="/resume">resume</Link>, view some of my recent <Link to="/projects">projects</Link>, or <Link to="/contact">get in contact with me</Link>.
                    </div>
                    {/* <div>
                        For some fun, try changing the theme below!
                    </div>
                    <Button text="Select theme" onClick={() => setOpenModal(true)}/> */}
                </div>
                </Card>
            </Container>
            <ThemeModal onClose={() => setOpenModal(false)} show={openModal}/>
        </Layout>
    )
}

export default Home;
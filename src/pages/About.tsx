import React from  'react';

import Layout from '../components/Layout/Layout';
import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';
import classes from './Pages.module.css';
import aboutData, { aboutIntro } from '../data/about';

import AboutSection from '../ui/AboutSection/AboutSection';

const About = () => {
    return (
        <Layout selectedTab={0}>
            <Container>
                <Card title="About Me" subtitle={<div className={classes.subtitle}>A litte about who i am.</div>}>
                    <div className={classes.title}>Intro</div>
                    <div className={classes.intro}>{aboutIntro}</div>
                    {aboutData.map(section => <AboutSection icon={section.icon} title={section.title} bullets={section.bullets}/>)}
                </Card>
            </Container>
        </Layout>
    )
}

export default About;
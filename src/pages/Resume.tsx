import React from  'react';

import classes from './Pages.module.css';

import Layout from '../components/Layout/Layout';
import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';
import SectionLinks from '../components/Resume/SectionLinks';
import Experience from '../components/Resume/Experience';
import Education from '../components/Resume/Education';
import Courses from '../components/Resume/Courses';
import Skills from '../components/Resume/Skills'

export default function Resume() {
    const subheading = (
        <div>
            <div className={classes.extraSubtitle}>the tldr of my life.</div>
            <SectionLinks/>
        </div>
    )
    return (
        <Layout selectedTab={1}>
            <Container>
                <Card title="Resume" subtitle={subheading} id="education">
                    <Education />
                    <Experience />  
                    <Skills />
                    <Courses />
                </Card>
            </Container>
        </Layout>
    )
}
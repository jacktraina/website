import React from  'react';

import Layout from '../components/Layout/Layout';
import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';
import classes from './Pages.module.css';
import projectsData from '../data/projects';
import Project from '../components/Project/Project';

const Projects = () => {
    return (
        <Layout selectedTab={2}>
            <Container>
                <Card title="Projects" subtitle={<div className={classes.subtitle}>how I spend my free time.</div>}>
                    <div className={classes.projectsContainer}>
                        <ul>
                            {projectsData.map(proj => (
                                <li><Project title={proj.title} date={proj.date} img={proj.image} description={proj.description} link={proj.link}/></li>
                            ))}
                        </ul>
                    </div>
                </Card>
            </Container>
        </Layout>
    )
}

export default Projects;
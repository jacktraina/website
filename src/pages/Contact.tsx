import React from  'react';

import Layout from '../components/Layout/Layout';
import Container from '../ui/Container/Container';
import Card from '../ui/Card/Card';
import Socials from '../components/Socials/Socials';
import classes from './Pages.module.css';

const Contact = () => {
    const subtitle = <div className={classes.subtitle}>let's connect.</div>;
    return (
        <Layout selectedTab={3}>
            <Container>
                <Card title="Contact" subtitle={subtitle}>
                    <Socials/>
                </Card>
            </Container>
        </Layout>
    )
}

export default Contact;
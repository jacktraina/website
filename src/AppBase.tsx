import React, { Component, Suspense, lazy } from 'react'

import ReactResizeDetector from 'react-resize-detector';
import { DeviceSizeContext } from './Contexts'
import { StyleSheet, css } from 'aphrodite'
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/Layout/Layout'
import { createBrowserHistory } from 'history';

interface State {
    width?: number,
    height?: number,
}

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Resume = lazy(() => import('./pages/Resume'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

const history = createBrowserHistory();

export default class AppBase extends Component<{ }, State> {
    constructor(props: { }) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
        }
    }

    render() {
        return (
        <div className={css(styles.app)}>
            <DeviceSizeContext.Provider value={{ width: this.state.width ?? 0, height: this.state.height ?? 0, mobileSizeClass: ((this.state.width ?? 0) <= 800)  }}>
                <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: -100, pointerEvents: 'none' }}>
                    <ReactResizeDetector handleHeight handleWidth onResize={this.onResize}/>
                </div>
                <Suspense fallback={<Layout selectedTab={-1}/>}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/resume" component={Resume} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </Suspense>
            </DeviceSizeContext.Provider>
        </div>
        )
    }

    onResize = ( width?: number, height?: number ) => {
        this.setState({
            width: width,
            height: height,
        })
    }
}

const styles = StyleSheet.create({
    app: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    }
})

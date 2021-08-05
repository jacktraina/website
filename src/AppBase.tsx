import React, { Component, Suspense } from 'react'

import ReactResizeDetector from 'react-resize-detector';
import { DeviceSizeContext } from './Contexts'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

interface State {
    width?: number,
    height?: number,
}

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
                        <Route path="/home" render={() => <Home />} />
                        <Route path="/about" render={() => <About />} />
                        <Route path="/resume" render={() => <Resume />}/>
                        <Route path="/projects" render={() => <Projects />} />
                        <Route path="/contact" render={() => <Contact/>} />
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

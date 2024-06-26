import React, { Component, Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

export default class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main> <Outlet /> </main>
                <Footer />
            </Fragment>
        )
    }
}

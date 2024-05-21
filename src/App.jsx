import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './pages/home'
import ProductsDeatils from './pages/home/components/ProductsDeatils'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='product/:id' element={<ProductsDeatils />} />
          </Route>
        </Routes>
      </Fragment>
    )
  }
}

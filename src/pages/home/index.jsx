import React, { Component } from 'react'
import Hero from './components/Hero'
import { axiosUrl } from '../../config'
import { nanoid } from 'nanoid'
import ProductsCard from './components/ProductsCard'

export default class Home extends Component {
    constructor() {
        super(),
            this.state = {
                data: [],
            }
    }

    componentDidMount() {
        axiosUrl(`/products`).then(res => this.setState({ data: res.data.products })).catch(er => console.error(er))
    }

    render() {

        console.log(this.state.data[0]);

        return (
            <section className='w-[1519px] mx-auto bg-white'>
                <Hero key={nanoid()} />
                <div className='w-[1440px] mx-auto py-5 grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-6 items-center justify-center gap-8'>
                    {
                        this.state.data?.map(product => (
                            <ProductsCard key={product.id} data={product} />
                        ))
                    }
                </div>
            </section>
        )
    }
}

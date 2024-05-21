import React, { Component } from 'react'

export default class ProductsCard extends Component {
    constructor(props) {
        super(props),
            this.state = {
                product: props.product
            }
    }

    render() {
        const { images, description, title, price } = this.props.data;
        return (
            <div className='w-[230px] h-[470px] mx-auto gap-4 flex flex-col items-start rounded-t-2xl'>
                <figure className='p-1'> <img className='w-[230px] h-[230px] object-cover rounded-2xl bg-gray-100' src={images[0]} alt="" /> </figure>
                <div className="cards-titles flex flex-col items-start justify-center gap-2 p-1 text-black">
                    <h2 className='text-lg font-semibold'>{title}</h2>
                    <h2 className='text-sm'>{description}</h2>
                    <h2 className='text-lg font-bold text-red-500'>${price}.00</h2>
                </div>
            </div>
        )
    }
}

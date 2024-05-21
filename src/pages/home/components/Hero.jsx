import React, { Component } from 'react'
import { GrNext } from "react-icons/gr";

export default class Hero extends Component {
    render() {
        return (
            <div className='w-[1519px] mx-auto py-8 bg-white'>
                <div className="w-[1440px] h-[280px] mx-auto ps-24 flex items-center justify-between bg-[#D7CDC3]">
                    <div className="hero-title flex flex-col items-center justify-center gap-4">
                        <h2 className='text-4xl font-bold text-black'>ОДНА ЦЕНА</h2>
                        <p className='text-md text-black'>При заказе от 3 до 10 товаров</p>
                        <button className='w-[250px] flex items-center justify-center gap-2 py-3 rounded-3xl text-white bg-black'> Купить <GrNext className='mt-1' fontSize={15} /> </button>
                    </div>
                    <figure> <img className='w-[800px]' src="https://ae01.alicdn.com/kf/Saaaa022e60694a368ec748dadcfdd0a6k/1790x572.png" alt="Hero image" /> </figure>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { PiBookOpenFill } from "react-icons/pi";
import { FaCartShopping, FaUserPlus } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";

export default class Header extends Component {
    render() {
        return (
            <header className='w-[1519px] py-3 mx-auto bg-white'>
                <nav className='w-[1440px]  mx-auto ps-5 pe-2 py-3 flex items-center justify-between rounded-lg bg-[#FE2722]'>
                    <Link to={`/`}> <img className='w-[120px]' src={logo} alt="Logo" /> </Link>
                    <div className="w-[1100px] flex items-center justify-between gap-2">
                        <button className='w-[70px] h-[60px] flex flex-col text-sm items-center justify-center gap-1 rounded-md shadow-md text-white bg-[#e81711]'>
                            <PiBookOpenFill fontSize={28} /> Katalog
                        </button>
                        <label className='w-[800px] h-[60px] flex items-center justify-between rounded-lg border-2 bg-white'>
                            <input className='w-full px-4  h-[100%] font-medium text-lg text-black border-white rounded-lg bg-white'
                                type="search" placeholder='Search...' />
                            <button className='px-8 py-3 me-2 rounded-3xl font-semibold text-black bg-lime-300'>Search</button>
                        </label>
                        <div className="text-sm flex items-center justify-center gap-1">
                            <button className='w-[68px] h-[60px] flex flex-col items-center justify-center gap-1 rounded-md shadow-md text-white bg-[#e81711]'>
                                <LuBox fontSize={25} />
                                Zakazlar
                            </button>
                            <button className='w-[68px] h-[60px] flex flex-col items-center justify-center gap-1 rounded-md shadow-md text-white bg-[#e81711]'>
                                <FaCartShopping fontSize={25} />
                                Karzinka
                            </button>
                            <button className='w-[68px] h-[60px] flex flex-col items-center justify-center gap-1 rounded-md shadow-md text-white bg-[#e81711]'>
                                <FaUserPlus fontSize={25} />
                                Login
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

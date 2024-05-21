import React, { Component } from 'react'
import { FaApple, FaGooglePlay } from 'react-icons/fa6'

export default class Footer extends Component {
    render() {
        return (
            <footer className='w-[1519px] px-14 py-10 bg-neutral-200'>
                <div className="footer-top flex  items-start justify-between">
                    <div className="flex flex-col items-start gap-2 text-black">
                        <h5>ПОКУПАТЕЛЯМ</h5>
                        <p className='bg-gray-200'>Поддержка</p>
                        <p className='bg-gray-200'>Календарь распродаж</p>
                        <p className='bg-gray-200'>Гид по AliExpress</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-black">
                        <h5>ПОКУПАТЕЛЯМ</h5>
                        <p className='bg-gray-200'>Поддержка</p>
                        <p className='bg-gray-200'>Календарь распродаж</p>
                        <p className='bg-gray-200'>Гид по AliExpress</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-black">
                        <h5>ПОКУПАТЕЛЯМ</h5>
                        <p className='bg-gray-200'>Поддержка</p>
                        <p className='bg-gray-200'>Календарь распродаж</p>
                        <p className='bg-gray-200'>Гид по AliExpress</p>
                    </div>
                    <div className="flex flex-col items-start gap-2 text-black">
                        <h5>ПОКУПАТЕЛЯМ</h5>
                        <p className='bg-gray-200'>Поддержка</p>
                        <p className='bg-gray-200'>Календарь распродаж</p>
                        <p className='bg-gray-200'>Гид по AliExpress</p>
                    </div>
                </div>
                <div className="footer-bottom mt-14 flex items-center justify-between">
                    <p> © AliExpress® <br /> 2019 - 2024 </p>
                    <p className='w-[350px]'> Ha информационном pecypce <br /> применяются <span className='text-blue-500'>рекомендательные технологии</span></p>
                    <p className='text-blue-500'> Политика конфиденциальности <br /> Пользовательские соглашения </p>
                    <div className="flex items-center justify-center">
                        <div className="w-[120px] py-1 flex items-center justify-center gap-3 rounded-md border-2 border-gray-600">
                            <FaGooglePlay fontSize={28} />
                            <div className='flex flex-col'>
                                <h5 className='text-[9px]'>доступно в</h5>
                                <p className='text-[12px] font-semibold text-gray-600'>Google Play</p>
                            </div>
                        </div>
                        <div className="w-[120px] py-1 flex items-center justify-center gap-3 rounded-md border-2 border-gray-600">
                            <FaApple fontSize={30} />
                            <div className='flex flex-col'>
                                <h5 className='text-[9px]'>доступно в</h5>
                                <p className='text-[12px] font-semibold text-gray-600'>App Store</p>
                            </div>
                        </div>
                        <div className="w-[120px] py-1 flex items-center justify-center gap-3 rounded-md border-2 border-gray-600">
                            <FaGooglePlay fontSize={30} />
                            <div className='flex flex-col'>
                                <h5 className='text-[9px]'>доступно в</h5>
                                <p className='text-[12px] font-semibold text-gray-600'>AppGallery</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

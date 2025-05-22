import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router'
import Logo from '../../assets/logoblack.jpg'
import { FaListUl } from "react-icons/fa";
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const location = useLocation();

    const isActiveLocation = (hash) => location.hash === hash

    const [isVisible, setIsVisible] = useState(true)

    const showNavbar = () => {
        setIsVisible(!isVisible) 
    }

    return (
        <>
            <div className='w-full h-[60px] bg-[#90e0ef] relative z-100'>
                <div className="w-full h-[60px] flex flex-col sm:flex-row items-center md:justify-between fixed top-0 left-0 sm:h-[60px] sm:px-3 bg-[#90e0ef] z-100">
                    <div className='w-full sm:w-1/3 h-[60px] pt-2 sm:pt-0 flex justify-between items-center px-3 [#90e0ef] z-100  sm:px-0 bg-[#90e0ef]'>
                        <div className='w-1/4 h-full flex justify-center items-center gap-2 sm:w-16 px-2'>
                            <img src={Logo} alt="logo" className='h-[40px] flex justify-center items-center rounded-full' />
                            {/* <h3 className='text-xl font-bold italic w-full md:text-2xl lg:text-3xl'>Tanishq Yadav</h3> */}
                        </div>
                        <button className='flex justify-center p-2 items-center text-2xl sm:hidden' onClick={showNavbar}>{isVisible ? <FaListUl /> : <RxCross1 />}</button>
                    </div>


                    <div className={`w-full bg-[#90e0ef] sm:bg-[#90e0ef] px-18 sm:px-3 ${isVisible && '-translate-y-[110%] opacity-0'} transition duration-1000 sm:transition-none ease-in-out sm:h-[60px] sm:flex justify-end items-center sm:w-[70%] sm:translate-y-0 sm:opacity-100 md:w-[60%] lg:w-[50%] xl:w-[40%]`}>
                        <ul className='sm:flex sm:justify-between sm:items-center sm:w-[80%] xl:text-xl'>
                            <li className='py-1'>
                                <NavHashLink
                                    smooth
                                    to='/#home'
                                    className={`font-bold ${isActiveLocation('#home') ? 'text-blue-600' : ''}  text-md 2xl:text-2xl`}>
                                    Home
                                </NavHashLink>
                            </li>
                            <li className='py-1 '>
                                <NavHashLink
                                    smooth
                                    to='/#about'
                                    className={`font-bold ${isActiveLocation('#about') ? 'text-blue-600' : ''} text-md 2xl:text-2xl`}>
                                    About
                                </NavHashLink>
                            </li>
                            <li className='py-1 '>
                                <NavHashLink
                                    smooth
                                    to='/#skills'
                                    className={`font-bold ${isActiveLocation('#skills') ? 'text-blue-600' : ''} text-md 2xl:text-2xl`}>
                                    Skills
                                </NavHashLink>
                            </li>
                            <li className='py-1 '>
                                <NavHashLink
                                    smooth
                                    to='/#projects'
                                    className={`font-bold ${isActiveLocation('#projects') ? 'text-blue-600' : ''} text-md 2xl:text-2xl`}>
                                    Projects
                                </NavHashLink>
                            </li>
                            <li className='py-1 '>
                                <NavHashLink
                                    smooth
                                    to='/#contact'
                                    className={`font-bold ${isActiveLocation('#contact') ? 'text-blue-600' : ''} text-md 2xl:text-2xl`}>
                                    Contact
                                </NavHashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { BsChevronDoubleRight } from "react-icons/bs"
import { Link } from 'react-router';

const Footer = () => {

    return (
        <>
            <div className='w-full h-[60vh]  2xl:h-[40vh]'>
                <div className='h-[300px] w-full bg-gray-900 flex flex-col justify-evenly items-center absolute bottom-0'>
                    <div className='h-[300px] w-full flex justify-center items-center sm:justify-start'>
                        <div className='h-[180px] w-[80%] sm:w-1/3 sm:ml-15 grid grid-cols-2 grid-rows-1 gap-6'>
                            <div>
                                <ul className='text-white'>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <NavHashLink
                                            smooth
                                            to='/#home'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Home
                                        </NavHashLink>
                                    </li>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <NavHashLink
                                            smooth
                                            to='/#about'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            About
                                        </NavHashLink>
                                    </li>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <NavHashLink
                                            smooth
                                            to='/#skills'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Skills
                                        </NavHashLink>
                                    </li>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <NavHashLink
                                            smooth
                                            to='/#projects'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Projects
                                        </NavHashLink>
                                    </li>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <NavHashLink
                                            smooth
                                            to='/#contact'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Contact
                                        </NavHashLink>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className='text-white'>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <Link
                                            smooth
                                            to='https://github.com/TanishqYadav039'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Github
                                        </Link>
                                    </li>
                                    <li className='py-1 flex items-center gap-2 2xl:gap-3'>
                                        <BsChevronDoubleRight />
                                        <Link
                                            smooth
                                            to='https://www.linkedin.com/in/tanishqyadav-reactdev039'
                                            className={`font-bold text-md 2xl:text-2xl`}>
                                            Linkedin
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='h-[50px] w-full flex justify-center items-center'>
                        <h3 className='text-lg text-white'>Copyright &copy; 2025 by Tanishq Yadav</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

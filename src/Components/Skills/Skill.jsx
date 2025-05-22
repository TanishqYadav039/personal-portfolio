import React from 'react'
import SkillsCard from '../Cards/SkillsCard.jsx'
import { BsChevronDoubleRight } from "react-icons/bs";
import HtmlLogo from '/html5.png'
import CssLogo from '/css3.png'
import JavascriptLogo from '/javascript.png'
import ReactLogo from '/reactjs.png'
import Redux from '/redux.png'
import Tailwindcss from '/tailwindcss.png'
import Git from '/git.png'
import github from '/github.png'

const Skill = () => {
    return (
        <>
            <div className='w-full h-[100dvh] pt-10 flex justify-center 2xl:h-screen items-center 2xl:justify-start text-3xl 2xl:text-5xl font-bold flex-col italic'>
                <h2 className='w-full h-[40px] mt-25 md:mt-18 mb-4 xl:mb-10 flex justify-center items-center'>Skills</h2>
                <div className='w-full xl:w-[95%] 2xl:h-[80%] h-[90vh] px-2 grid justify-center items-center  grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 grid-rows-3 gap-2 2xl:gap-8'>
                    <div className='w-full h-[150px] 2xl:h-full flex flex-col items-center gap-3 bg-[#90e0ef]  row-start-1 rounded-md shadow-xl p-2'>
                        <h1>Languages</h1>
                        <div className='w-full px-3'>
                            <ul className='flex gap-1 flex-col'>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        HTML
                                    </span>
                                </li>

                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        CSS
                                    </span>
                                </li>

                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        JAVASCRIPT
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden sm:visible w-full h-[150px] 2xl:h-full sm:flex flex-col justify-center items-center gap-3 bg-[#f0f1f1]  row-start-1 sm:col-start-2 sm:col-span-2 lg:col-span-1 rounded-md shadow-xl p-2'>
                        <div className='w-full px-3'>
                            <ul className='flex gap-3 text-sm justify-center sm:justify-evenly 2xl:text-xl'>
                                <li><SkillsCard image={HtmlLogo} className='hover:shadow-orange-400' /></li>
                                <li><SkillsCard image={CssLogo} className='hover:shadow-blue-400' /></li>
                                <li><SkillsCard image={JavascriptLogo} className='hover:shadow-yellow-400' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[150px] 2xl:h-full flex flex-col gap-2 items-center bg-[#90e0ef]  row-start-2 sm:col-start-3 lg:col-start-2 rounded-md shadow-xl p-2'>
                        <h1>Frameworks</h1>
                        <div className='w-full px-3'>
                            <ul className='flex gap-1 flex-col'>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        React-JS
                                    </span>
                                </li>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        Redux-Toolkit
                                    </span>
                                </li>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        TailwindCss
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden sm:visible w-full h-[150px] 2xl:h-full sm:flex flex-col justify-center items-center gap-3 bg-[#f0f1f1]  row-start-2 sm:col-start-1 sm:col-span-2 lg:col-span-1 rounded-md shadow-xl p-2'>
                        <div className='w-full h-full flex justify-center gap-4 items-center px-3 overflow-y-auto'>
                            <ul className='w-full flex gap-3 text-sm justify-evenly lg:justify-evenly flex-wrap 2xl:text-xl '>
                                <li><SkillsCard image={ReactLogo} className='hover:shadow-cyan-400' /></li>
                                <li><SkillsCard image={Redux} className='hover:shadow-purple-400' /></li>
                                <li><SkillsCard image={Tailwindcss} className='hover:shadow-sky-600' /></li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full h-[150px] 2xl:h-full flex flex-col gap-3 items-center bg-[#90e0ef]  row-start-3 sm:col-start-1 sm:col-span-2 lg:col-span-1 rounded-md shadow-xl p-2'>
                        <h1>Tools & Technology</h1>
                        <div className='w-full px-3'>
                            <ul className='flex gap-1 flex-col'>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        Git
                                    </span>
                                </li>
                                <li className='w-full text-sm 2xl:text-2xl font-bold flex items-center gap-2'>
                                    <BsChevronDoubleRight />
                                    <span className='hover:translate-x-1 cursor-pointer hover:text-blue-600'>
                                        Github
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden sm:visible w-full h-[150px] 2xl:h-full sm:flex flex-col justify-center items-center gap-3 bg-[#f0f1f1]  row-start-3 sm:col-start-3 lg:col-start-2 rounded-md shadow-xl p-2'>
                        <div className='w-full px-3'>
                            <ul className='flex gap-3 text-sm justify-center lg:justify-evenly 2xl:text-xl '>
                                <li><SkillsCard image={Git} className='hover:shadow-orange-400' /></li>
                                <li><SkillsCard image={github} className='hover:shadow-violet-500' /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill

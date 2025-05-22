import React from 'react'

const About = () => {
    return (
        <div>
            <div className='h-[100dvh] w-full px-4 flex justify-center items-centeritalic '>
                <div className='h-full w-full flex flex-col items-center pt-20 gap-10 2xl:gap-6'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='w-full text-center font-bold text-sm text-gray-700 2xl:text-xl'>Get To Know More</h2>
                        <h2 className='w-full text-center font-bold text-4xl text-gray-900 2xl:text-6xl'>About Me</h2>
                    </div>
                    <div className='text-sm h-[50vh] text-wrap text-gray-700 font-medium md:w-[90%] md:text-lg 2xl:text-3xl leading-normal'>
                        As a web developer passion for programming and problem-solving, I am eager to leverage my skills in fronted development to contribute to innovative projects. With a solid foundation in Javascript programming gained through self-study, I am equipped to tackle challenges and deliver high-quality solution I have Showed my skills through the projects which i have made also used javascript and reactJs to solve day to day problems
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

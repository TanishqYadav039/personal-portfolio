import React from 'react'
import Card from '../Cards/Card'
import ProjectImg1 from '../../assets/portfolioimg.png'
import ProjectImg3 from '../../assets/spotifyClone.png'
import ProjectImg2 from '../../assets/TodoApp.png'

const Project = () => {
    return (
        <>
            <div className='w-full h-full flex items-center justify-center flex-col mt-25 gap-2 2xl:h-screen'>
                <h1 className='font-bold text-2xl pt-20 2xl:text-5xl 2xl:pb-10'>Projects</h1>

                <div className='w-[90%] grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 justify-items-center items-center sm:w-[70%] md:w-[90%] 2xl:w-[95%] xl:w-full md:gap-8'>

                    <Card 
                    projectimg={ProjectImg1}

                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col justify-between items-center py-2 font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}
                    
                    projectName={"Personal portfolio"}

                    description={'My personal portfolio built with reactjs and tailwindcss where i can focus to built responsive layout and visual design.'} 
                    />
                    
                    <Card 

                    projectimg={ProjectImg2}
                
                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col justify-between items-center py-2 font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}
                    
                    projectName={'To-Do App'}

                    description={'To-do app built with Reactjs and Tailwindcss where i can add react hooks, context-api and localstorage to persist my theme and task even after refreshing page'}
                    />

                    <Card 
                    projectimg={ProjectImg3}

                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col justify-between items-center py-2 font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}

                    projectName={'Spotify-Clone'}

                    description={'Spotify Clone with HTML, CSS and JavaScript where I have focused to built responsive layout and scalable design.'}
                    />
                    

                </div>
            </div>
        </>
    )
}

export default Project

// w-full h-[400px] 2xl:h-[500px] bg-amber-300 px-3 flex flex-col justify-center items-center font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1
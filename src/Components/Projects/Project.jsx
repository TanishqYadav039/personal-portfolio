import React from 'react'
import Card from '../Cards/Card'

const Project = () => {
    return (
        <>
            <div className='w-full h-full flex items-center justify-center flex-col mt-25 gap-2 2xl:h-screen'>
                <h1 className='font-bold text-2xl pt-20 2xl:text-5xl 2xl:pb-10'>Projects</h1>

                <div className='w-[90%] grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 xl:grid-rows-1 xl:grid-cols-3 justify-items-center items-center sm:w-[70%] md:w-[90%] 2xl:w-[95%] xl:w-full md:gap-8'>

                    <Card 
                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col justify-center items-center gap-2 font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}
                    
                    projectName={'Project-1'}

                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam vitae, magni eius eos quia quisquam nemo ad delectus repellendus maiores voluptatum nostrum. Mollitia, dolor.'} 
                    />
                    
                    <Card 
                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col gap-2 justify-center items-center font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-2 md:row-start-1 md:col-start-2 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}
                    
                    projectName={'Project-2'}

                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam vitae, magni eius eos quia quisquam nemo ad delectus repellendus maiores voluptatum nostrum. Mollitia, dolor.'}
                    />

                    <Card 
                    className={'w-full h-[400px] 2xl:h-[600px] bg-[#90e0ef] px-3 flex flex-col gap-2 justify-center items-center font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-3 md:row-start-2 md:col-start-1  md:col-span-2 xl:row-start-1 xl:col-start-3 xl:col-span-1 rounded-xl shadow-xl cursor-pointer hover:scale-102 transition duration-300 linear hover:shadow-cyan-400'}

                    projectName={'Project-3'}

                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quibusdam vitae, magni eius eos quia quisquam nemo ad delectus repellendus maiores voluptatum nostrum. Mollitia, dolor.'}
                    />
                    

                </div>
            </div>
        </>
    )
}

export default Project

// w-full h-[400px] 2xl:h-[500px] bg-amber-300 px-3 flex flex-col justify-center items-center font-bold my-4 md:w-[350px] 2xl:w-[500px] row-start-1
import React from 'react'

const Card = ({className, projectName, description}) => {
    return (
        <>
            <div className={className}>
                <div className='w-[98%] h-1/2 border-2 flex items-center justify-center'>
                    <img src="https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?ga=GA1.1.506606616.1746703658&semt=ais_hybrid&w=740" alt="project-1" className='w-full h-full object-fill 2xl:text-2xl' />
                </div>
                <h3 className='py-2 text-xl px-2 text-start w-full 2xl:text-3xl'>{projectName}</h3>
                <p className='text-sm font-medium px-2 text-wrap 2xl:text-xl'>{description}</p>
            </div>
        </>
    )
}

export default Card

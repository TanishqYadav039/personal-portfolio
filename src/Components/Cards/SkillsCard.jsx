import React from 'react'

const SkillsCard = ({ image, className }) => {
    return (
        <>
            <div className={`h-[100px] w-[100px] xl:h-[120px] xl:w-[120px] 2xl:h-[150px] 2xl:w-[150px] text-white flex justify-center items-center rounded-full shadow-lg hover:scale-101 ${className} transition duration-150 ease-linear text-center cursor-pointer`}>
                <img src={image} alt="skill" className={`h-[80px] xl:h-[100px] object-cover`}/>
            </div>
        </>
    )
}

export default SkillsCard

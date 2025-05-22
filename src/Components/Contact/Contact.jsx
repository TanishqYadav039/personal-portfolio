import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='w-full h-[100vh] md:h-screen flex justify-center items-center'>
                <div className='w-[90%] sm:w-[70%] md:w-[350px] lg:w-1/2 xl:w-1/3 2xl:1/4 h-[80%] 2xl:h-[80%] bg-[#90e4f3] mt-10 p-3 2xl:px-6 rounded-xl shadow-xl flex justify-between items-center flex-col'>
                    <form 
                    onSubmit={(e)=>{
                        e.preventDefault()
                    }}
                    className='w-full sm:w-[85%] md:w-full h-full flex flex-col justify-between'
                    >
                        <h3 className='w-full h-[50px] flex justify-center items-center font-bold text-2xl 2xl:text-4xl'>Contact-Me</h3>
                        <div className='h-[85%] w-full p-2 2xl:px-4 flex flex-col justify-evenly lg:items-center'>
                            <div className='lg:w-3/4 xl:w-full'>
                                <label htmlFor='name' className='block px-1 font-medium 2xl:text-2xl'>Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Full-name...'
                                    className='w-full px-2 py-1 2xl:py-2 my-2 border rounded-md text-sm 2xl:text-2xl'
                                />
                            </div>
                            <div className='lg:w-3/4 xl:w-full'>
                                <label htmlFor='email' className='block px-1 font-medium 2xl:text-2xl'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder='xyz@gmail.com...'
                                    className='w-full px-2 2xl:py-2 py-1 my-2 border rounded-md text-sm 2xl:text-2xl'
                                />
                            </div>
                            <div className='lg:w-3/4 xl:w-full'>
                                <label htmlFor="phone" className='block px-1 font-medium 2xl:text-2xl'>Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    pattern="\+?[0-9]*"
                                    placeholder='91xxxxxxxx'
                                    className='w-full px-2 2xl:py-2 py-1 my-2 border rounded-md text-sm 2xl:text-2xl'
                                />
                            </div>
                            <div className='lg:w-3/4 xl:w-full'>
                                <button
                                    className='w-full h-[40px] 2xl:h-[60px] 2xl:text-2xl flex justify-center items-center border rounded-lg bg-blue-400 hover:bg-blue-300 font-bold'
                                    
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact

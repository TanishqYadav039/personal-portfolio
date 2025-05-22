import { NavHashLink } from 'react-router-hash-link';



const Home = () => {

    return (
        <>
            <div className='h-[100dvh] w-full flex justify-center items-center'>
                <div className='h-[80%] w-full px-3 flex justify-center items-center flex-col gap-2 italic sm:gap-4 sm:mt-15 2xl:gap-8'>
                    <span className='text-[44px] font-bold text-center sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[150px]'>Tanishq yadav</span>
                    <span className='text-[26px] font-bold text-center sm:text-4xl lg:text-5xl 2xl:text-7xl'>Software Developer</span>
                    <div className='flex gap-8 mt-3'>
                        <NavHashLink
                        smooth
                        to='/#contact'
                        ><button
                            className='font-bold bg-white text-sm py-2 rounded-xl shadow-lg w-26 sm:w-30 sm:text-base 2xl:w-38 2xl:text-xl 2xl:py-2 cursor-pointer'

                        >
                                Contact Me
                            </button></NavHashLink>

                        <a href='/Resume/TanishqYadavResume.pdf' download>
                            <button
                                className='font-bold bg-gray-900 text-white text-sm py-2 rounded-xl shadow-lg w-30 sm:text-base 2xl:w-40 2xl:text-xl 2xl:py-3 hover:cursor-pointer hover:bg-gray-700'
                            >
                                Resume
                            </button></a>
                    </div>
                </div>
                {/* <div className='hidden md:block w-108 h-[50%] px-3 '>
                    <img src={myImage} alt='profile' className='w-full h-full object-fill' />
                </div> */}
            </div>
        </>
    )
}

export default Home;
import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='flex max-md:flex-col md:flex md:justify-between mt-20 ml-10'>
            <div className='flex flex-col'>
                <div>
                    <img
                    src='./assets/home.svg'
                    className=' md:w-[341px] md:h[141px]'
                    width={156}
                    height={58}
                    />
                </div>
                <div className='flex flex-col ml-4 mt-5'>
                    <p className=' font-inter font-semibold text-[32px] md:text-[64px]'>I design top</p>
                    <p className=' font-inter font-semibold text-[32px] md:text-[64px]'>notch websites</p>
                </div>
            </div>
            <div className='md:pr-[6rem] md:mt-[11rem]'>
                <div className=''>
                    <p className='mt-4 font-inter text-[16px] md:text-[24px] w-[298px] md:w-[477px] ml-4 flex'>I’ll design your website and will develop to land it on internet using No-code.</p>
                    <button className='bg-black text-white font-inter text-[16px] md:text-[24px] p-2 px-5 mt-3 ml-4'>Hire Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
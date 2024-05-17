

const Hero = () => {
  return (
    <div>
        <div>
            <div>
                <img
                src='./assets/whatido.svg'
                className='md:w-[140px] md:h-[143px] ml-10 md:ml-36 mt-28'
                width={88}
                height={81}
                />
            </div>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col lg:flex-row lg:space-x-16 items-center justify-center pb-14 max-lg:space-y-8'>
                <div className='bg-[#FFE68C] border-4 border-[#EECD56] lg:w-[409px] lg:h-[477px] w-[260px] h-[311px] flex items-center justify-start mt-4 transform rotate-[-3deg]'>
                    <div className='flex flex-col ml-[3rem] max-lg:mt-11'>
                        <div className=''>
                            <img
                            src='./assets/pencil.svg'
                            className='lg:w-[60.77px] lg:-[45.89px]'
                            width={38.4}
                            height={29}
                            />
                        </div>
                        <div className='flex-col mt-5'>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>User Research</p>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>Design</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#9DDCFF] border-4 border-[#5AB5E8] lg:w-[409px] lg:h-[477px] w-[260px] h-[311px] flex items-center justify-start mt-4 transform rotate-[3deg]'>
                    <div className='flex flex-col ml-[3rem] max-lg:mt-11'>
                        <div className=''>
                            <img
                            src='./assets/eye.svg'
                            className='lg:w-[60.77px] lg:-[45.89px]'
                            width={38.4}
                            height={29}
                            />
                        </div>
                        <div className='flex-col mt-5'>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>UI & Product</p>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>Design</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#FFC9F0] border-4 border-[#F384D4] lg:w-[409px] lg:h-[477px] w-[260px] h-[311px] flex items-center justify-start mt-4 transform rotate-[-3deg]'>
                    <div className='flex flex-col ml-[3rem] max-lg:mt-11'>
                        <div className=''>
                            <img
                            src='./assets/star.svg'
                            className='lg:w-[60.77px] lg:-[45.89px]'
                            width={38.4}
                            height={29}
                            />
                        </div>
                        <div className='flex-col mt-5'>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>No-code</p>
                            <p className=' font-inter text-black font-semibold text-[24px] lg:text-[34px] lg:[36px]'>Development</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Hero
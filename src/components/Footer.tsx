

const Footer = () => {
    return (
        <div>
            <div className='border-t border-y-4 border-black'>
                <div className='flex md:pb-10  md:flex md:flex-row md:justify-center'>
                    <div className='pt-10 max-md:ml-5 max:md:flex-col'>
                        <div>
                            <img
                                src='./assets/footericon.svg'
                            />
                        </div>
                        <div className=' max-md:flex flex-col'>
                            <div className='flex  max-md:flex-row max-md:mt-5 max-md:pb-5 space-x-6'>
                                <div className='bg-black w-[70px] md:w-[104px]'>
                                    <p className='text-white font-inter text-[16px] md:text-[32px] '>Twitter/X</p>
                                </div>
                                <div className='bg-black w-[63px] md:w-[125px]'>
                                    <p className='text-white font-inter text-[16px] md:text-[32px] '>LinkedIn</p>
                                </div>
                                <div className='bg-black w-[75px] md:w-[150px]'>
                                    <p className='text-white font-inter text-[16px] md:text-[32px] '>Instagram</p>
                                </div>
                            </div>
                            <div className=' max-md:pb-10'>
                                <p className='text-[16px] md:text-[24px]'>Copyright. Portfolio 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
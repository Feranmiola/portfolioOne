

const Feautured = () => {
  return (
    <div className=' pb-10'>
        <div className='flex flex-col md:flex-row md:justify-between'>
            <div className='flex-col ml-16 mt-[10rem]'>
                <img
                src='./assets/feautured.svg'
                />
                <img
                src='./assets/arrow2.svg'
                className='xlg:ml-[10rem] max-md:transform max-md:rotate-[44deg] pb-5'
                />
                <p className='font-inter text-[16px] md:text-[24px]'>Have designed</p>
                <p className='font-inter text-[16px] md:text-[24px]'>more than 20 projects</p>
            </div>

            <div className='flex flex-col max-md:items-center max-md:justify-center max-md:mt-10 space-y-6 lg:mr-36'>
                <div className='md:flex md:flex-row md:space-x-6 max-md:space-y-6'>
                    <div className='border-4 rounded-[6px] border-black lg:w-[405px] lg:h-[454px] w-[300px] h-[257px]'>

                    </div>
                    <div className='border-4 rounded-[6px] border-black lg:w-[405px] lg:h-[454px] w-[300px] h-[257px]'>

                    </div>
                </div>
                <div className='md:flex md:flex-row md:space-x-6 max-md:space-y-6'>
                    <div className='border-4 rounded-[6px] border-black lg:w-[405px] lg:h-[454px] w-[300px] h-[257px]'>

                    </div>
                    <div className='border-4 rounded-[6px] border-black lg:w-[405px] lg:h-[454px] w-[300px] h-[257px]'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feautured
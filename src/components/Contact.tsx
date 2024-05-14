import React from 'react'

const Contact = () => {
  return (
    <div className='pb-20'>
        <div className='ml-11 mt-10 flex flex-col md:flex-row md:justify-between'>
            <div className='flex-col md:mt-10'>
                <img
                src='./assets/contact.svg'
                />

                <img
                src='./assets/arrow2.svg'
                className='xlg:ml-[10rem] max-md:transform max-md:rotate-[44deg] pb-5'
                />

                <div className='px-5 pb-5 flex-col'>
                    <p className='font-inter text-[16px] w-[163px] md:text-[24px] md:w-[253px]'>
                        Have a project idea?
                    </p>
                    <p className='font-inter text-[16px] w-[163px] md:text-[24px] md:w-[253px]'>
                        Just say <span className='font-bold'>HI.</span>
                    </p>
                </div>
            </div>
            <div className='md:mr-80 md:mt-10'>
                <div className='flex flex-row'>
                    <img
                    src='./assets/Name.svg'
                    />
                    <img
                    src='./assets/formLine.svg'
                    className='mt-5 max-md:w-[150px] '
                    />
                </div>

                <div className='flex flex-row'>
                    <img
                    src='./assets/email.svg'
                    />
                    <img
                    src='./assets/formLine.svg'
                    className='mt-5 max-md:w-[150px]'
                    />
                </div>

                <div className='flex flex-row'>
                    <img
                    src='./assets/about.svg'
                    />
                    <img
                    src='./assets/formLine.svg'
                    className='mt-5 max-md:w-[150px]'
                    />
                </div>

                <div className='bg-black  w-[120px] h-[39px] flex items-center justify-center rotate-[2deg] mt-2 ml-3 md:h-[70px] md:w-[203px] md:ml-80'>
                    <p className='font-inter text-white md:text-[24px] rotate-[-2deg]'>Send Here</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
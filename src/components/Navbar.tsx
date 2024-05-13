import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex md:items-end md:justify-end items-center justify-between px-6 mt-4'>
            <img
            src='./assets/logo.svg'
            className='md:pt-4 md:flex'
            />

            <div className='flex px-2 space-x-4 md:space-x-10 md:mx-12 '>
                <p className=' font-inter text-[16px] md:text-[24px]'>Portfolio</p>
                <p className=' font-inter text-[16px] md:text-[24px]'>Hire Me</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
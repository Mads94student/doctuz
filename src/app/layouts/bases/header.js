
import React from 'react'
import img from '../../../assets/logo/doctuzorg.png'
import imgtitle from '../../../assets/logo/text/doctuztext2.png'


function Header() {
  return (
    <div className='flex w-full flex-row justify-center'>
      <div className='mr-auto'>
        <a href="/">
          <img src={img} alt="None" className='w-28 ml-3 mt-3' />
        </a>
      </div>
        <div className='absolute mt-8'>
          <a href="/">
            <div className='flex flex-col items-center gap-4'>
              <div className='text-white text-4xl'> <a><img src={imgtitle} alt="None" className='w-52' /></a></div>
              <div className='text-white text-lg'>Fordi å lære matte er gøy!</div>
            </div>
          </a>
        </div>

    </div>
  )
}

export default Header
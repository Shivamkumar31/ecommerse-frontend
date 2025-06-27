

import React from 'react'
import { assets } from '../assets/assets/assets'
const OurPolicy = () => {
return (
  <div>
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text sm:text-sm md:text-base text-color-gray-5 '>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>we offer hassle free exchange policy</p>
      </div>


<div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>we offer hassle free exchange policy</p>
      </div>

<div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt=""/>
        <p className='font-semibold'>Easy exchange policy</p>
        <p className='text-gray-400'>we offer hassle free exchange policy</p>
      </div>



    </div>

    
  </div>
)
}

export default OurPolicy






import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVolumeHigh} from '@fortawesome/free-solid-svg-icons'


function SubHeader() {


  return (
    <div className='h-32 flex bg-gray-100 flex-row items-center text-4xl md:text-6xl border-black border-1'>
      <FontAwesomeIcon icon={faVolumeHigh} className='justify-self-start ml-8 mr-8' />
    <div className='flex flex-row w-full justify-center '>Hvor mange prikker viser terningene?</div>
  </div>
  )
}

export default SubHeader
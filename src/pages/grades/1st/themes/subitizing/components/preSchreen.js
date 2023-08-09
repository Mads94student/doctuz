
import React from 'react'
import { useDispatch } from 'react-redux'
import { UIintroSchreen } from '../../../../../../slices/taskSlice'



function PreSchreen() {

const dispatch = useDispatch()

  return (
    <div className='w-full border-black flex flex-col justify-center items-center gap-20 text-6xl'>
        <div>Er du klar til å spille?</div>
        <div className='flex flex-row justify-center gap-8'>
            <div onClick={() => dispatch(UIintroSchreen())} className='w-36 border p-8 bg-green-400 hover:bg-green-500 rounded-full transition-colors duration-300 cursor-pointer flex flex-row justify-center'>Ja</div>
            <div className='w-36 border p-8 bg-red-400 hover:bg-red-500 rounded-full transition-colors duration-300 cursor-pointer flex flex-row justify-center'>Nei</div>
        </div>
    </div>
  )
}

export default PreSchreen
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UInextTask, UItoggleModal } from '../../../../../../../slices/taskSlice'



function Modal() {

    const showModal = useSelector((state) => state.tasks.ui.showModal)
    const dispatch = useDispatch()

    if(!showModal) return null
  return (
    <div className='absolute w-full h-full bg-gray-400 bg-opacity-50 flex justify-center items-center'>
        <div className=' bg-white w-2/5 h-3/5 flex flex-col items-center justify-center gap-10'>
            <div className='text-2xl'>
                Er du klar for neste oppgave?
            </div>
            <button onClick={() => {
              dispatch(UInextTask())
              dispatch(UItoggleModal())}} className='border-black p-8 bg-green-300 rounded-full cursor-pointer'>Ja</button>
        </div>
    </div>
  )
}

export default Modal
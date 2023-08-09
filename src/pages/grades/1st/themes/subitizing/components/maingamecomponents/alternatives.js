import React from 'react'
import { useDispatch } from 'react-redux'
import { UInextTask, UItoggleModal, markTaskRight, markTaskWrong } from '../../../../../../../slices/taskSlice'

function Alternatives(props) {

const dispatch = useDispatch()


  return (
    <div className='h-1/5 flex flex-row justify-center gap-4 sm:gap-12 md:gap-20 lg:gap-24 items-center'>
    {props.alternativeArr.map((number, index) => {
     return(<div key={index}
      onClick={() => {
        dispatch(UInextTask())
        return props.rightAnswer === number ? dispatch(markTaskRight(props.taskNumber)) : dispatch(markTaskWrong(props.taskNumber))}}
      className='flex flex-row justify-center items-center border-black border-2 rounded-2xl w-16 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 bg-white text-4xl sm:text-6xl md:text-7xl hover:cursor-pointer hover:bg-opacity-0 transition-colors duration-300'>
        {number}
      </div>)
    })}

  </div>
  )
}

export default Alternatives
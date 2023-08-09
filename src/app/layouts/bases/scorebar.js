
import React from 'react'
import { useSelector } from 'react-redux'

function Score() {

const tasks = useSelector((state) => state.tasks.taskManager.tasks)
  return (
    <div className='w-44 flex bg-page-header flex-col items-center pt-8 pb-8 gap-4'>
      {tasks.slice(0).reverse().map((task) => (
        <div key={task.id} className={`w-12 h-12 md:w-16 md:h-16 bg-white rounded-full`}>
          <div
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center  text-2xl ${task.status === 'right' ? 'bg-green-400' : task.status === 'wrong' ? 'bg-red-400' : ''}`
          }>
            {task.id}
          </div>
        </div>
      ))}
    </div>
  )
  }
export default Score
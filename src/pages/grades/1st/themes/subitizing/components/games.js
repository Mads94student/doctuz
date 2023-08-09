import React from 'react'
import Maingame from './maingame'
import { useSelector } from 'react-redux'
import { makeTasks } from '../randomize/createtasks'
import Finished from './finished'





function Games() {


  const SubitizingTasks = makeTasks()
  
    const currentTask = useSelector((state) => state.tasks.ui.currentTask)

  return (
    <div className='w-full h-full flex flex-col'>
      {SubitizingTasks.map((task) => {
        return currentTask === task.taskNumber ? <Maingame dice1={task.dice1} dice2={task.dice2} alternativeArr={task.alternativeArr} rightAnswer={task.answer} taskNumber={currentTask} /> : null
        })}
        {currentTask === 11 && <Finished />}
  </div>
  )
}

export default Games
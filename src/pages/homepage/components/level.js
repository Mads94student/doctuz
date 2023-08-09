
import React from 'react'


function Level(props) {
  return (
    <div className="flex shadow-lg flex-col items-center cursor-pointer text-white text-4xl sm:text-6xl justify-center w-28 h-28 sm:w-52 sm:h-52 rounded-full bg-gradient-to-br from-purple-400 via-blue-600 to-orange-400 hover:bg-gradient-to-tr hover:from-red-100 hover:via-green-500 hover:to-red-300 transition-all duration-300 hover:text-7xl sm:hover:text-9xl border border-hidden hover:border-solid">
        <img src={props.image} alt="None" className='rounded-full w-28 h-28 sm:h-52 sm:w-52 mix-blend-overlay' />
        <div className='absolute'>{props.grade}</div>
    </div>
  )
}

export default Level
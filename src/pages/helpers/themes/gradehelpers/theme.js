
import React from 'react'
import { Link } from 'react-router-dom'

function Theme(props) {
  return (
    <div>
      <Link to={`${props.theme}`} >
        <div className='w-40 h-40 md:w-60 md:h-60 flex flex-row justify-center items-center text-white text-2xl sm:text-3xl md:text-4xl bg-gradient-to-br from-purple-400 via-blue-600 to-orange-400 hover:bg-gradient-to-tr hover:from-red-100 hover:via-green-500 hover:to-red-300 transition-colors duration-300 rounded-full'>
          {props.theme}
        </div>
    </Link>
    </div>
  )
}

export default Theme
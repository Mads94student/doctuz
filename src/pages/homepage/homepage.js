import React from 'react'
import Levels from './components/levels'
import Description from './components/description'

function Homepage() {
  return (
    <div className="flex flex-col h-max bg-gradient-to-br from-blue-700 via-cyan-100 to-blue-500 bg-fixed">
      <div>
        <Levels/>
      </div>
      <div>
        <Description />
      </div>
    </div>
  )
}

export default Homepage
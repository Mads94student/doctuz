
import React from 'react'
import D1 from './descriptions/d1'
import D2 from './descriptions/d2'
import D3 from './descriptions/d3'

function Description() {
  return (
    <div>
        <div className='w-full h-max '>
            <D1 />
        </div>
        <div className='w-full h-max'>
            <D2 />
        </div>
        <div className='w-full h-max'>
            <D3 />
        </div>
    </div>
  )
}

export default Description
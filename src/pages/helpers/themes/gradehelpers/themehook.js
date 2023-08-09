

import React from 'react'
import Theme from './theme'

function ThemeHook(props) {
  return (
    <div>
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-10 pb-10'>
            {props.arr.map((subject) => {
                return(<div class="w-40 h-40 md:w-60 md:h-60 mb-4 bg-page-levels rounded-full"><Theme theme={subject} /></div>)
            })
            }
        </div>
    </div>
  )
}

export default ThemeHook
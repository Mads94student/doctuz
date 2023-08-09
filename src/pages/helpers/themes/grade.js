

import React from 'react'
import ThemeHook from './gradehelpers/themehook'

function Grade(props) {

  return (
    <div className='bg-gradient-to-br from-blue-700 via-cyan-100 to-blue-500 bg-fixed'>
        <div className='flex flex-row justify-start pl-12 pt-4 text-2xl font-bold text-white'>
              Velg tema:
            </div> 
    <div className='w-full h-max  flex justify-center'>
          {<ThemeHook arr={props.subjects} />}
        </div>
    </div>
  )
}

export default Grade
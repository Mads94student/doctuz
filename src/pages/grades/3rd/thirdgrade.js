import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'


function ThirdGrade() {


  return (
    <div>
        <Grade subjects={grades[2].subjects} />
    </div>
  )
}

export default ThirdGrade
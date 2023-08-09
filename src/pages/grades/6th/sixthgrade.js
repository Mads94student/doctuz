import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function SixthGrade() {
  return (
    <div>
        <Grade subjects={grades[5].subjects}/>
    </div>
  )
}

export default SixthGrade
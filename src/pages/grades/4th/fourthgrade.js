
import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function FourthGrade() {
  return (
    <div>
        <Grade subjects={grades[3].subjects}/>
    </div>
  )
}

export default FourthGrade
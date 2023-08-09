
import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function SecondGrade() {


  return (
    <div>
        <Grade subjects={grades[1].subjects} />
    </div>
  )
}

export default SecondGrade
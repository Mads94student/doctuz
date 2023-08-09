import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function FifthGrade() {
  return (
    <div>
        <Grade subjects={grades[4].subjects} />
    </div>
  )
}

export default FifthGrade

import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function FirstGrade() {
  return (
    <div>
      <Grade subjects={grades[0].subjects} />
    </div>
  )
}

export default FirstGrade
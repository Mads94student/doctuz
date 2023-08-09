import React from 'react'
import Grade from '../../helpers/themes/grade'
import grades from '../grades'

function SeventhGrade() {
  return (
    <div>
        <Grade subjects={grades[6].subjects}/>
    </div>
  )
}

export default SeventhGrade
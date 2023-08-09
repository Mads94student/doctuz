import React from 'react'
import Level from './level'
import grades from '../../grades/grades'
import { Link } from 'react-router-dom'

function Levels() {

    //Grades are imported from the grades.js file in the grades folder
    //frontend/src/pages/grades/grades.js
  return (
    <div>
        <div className='flex justify-start pl-20 text-white align-middle text-4xl font-bold mt-8'>
            Velg din klasse:
        </div>
    <div className='h-max flex flex-row flex-wrap gap-1 items-center justify-around pb-16 pt-16'>
        {grades.map((item) => {
            return(
            <div>
                <Link to={`grade/${item.name}`}>
                    <Level grade={item.grade} image={item.image} />
                </Link>
            </div>
            )
        })
        }
    </div>
</div>
  )
}

export default Levels


import React from 'react'

function Dices(props) {
  return (
    <div className='h-3/5 flex flex-row justify-center gap-10 md:gap-20 items-center'>
    <div>
      <img src={props.diceOne} alt="None" className='w-60' />
    </div>
    <div>
      <img src={props.diceTwo} alt="None" className='w-60' />
    </div>
  </div>
  )
}

export default Dices
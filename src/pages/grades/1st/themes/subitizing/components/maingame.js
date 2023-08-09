import React from 'react'
import SubHeader from './../components/maingamecomponents/subitizingheader'
import Dices from './../components/maingamecomponents/dices'
import Alternatives from './../components/maingamecomponents/alternatives'
import One from '../../../../../../assets/dice/one.png'
import Two from '../../../../../../assets/dice/two.png'
import Three from '../../../../../../assets/dice/three.png'
import Four from '../../../../../../assets/dice/four.png'
import Five from '../../../../../../assets/dice/five.png'
import Six from '../../../../../../assets/dice/six.png'


const dices = {
    1: {
      eyes: 1,
      image: One
    }, 
    2: {
      eyes: 2,
      image: Two
    },
    3: {
      eyes: 3,
      image: Three
    },
    4: {
      eyes: 4,
      image: Four
    },
    5: {
      eyes: 5,
      image: Five
    },
    6: {
      eyes: 6,
      image: Six
    }
}



function Maingame(props) {
  return (
    <div className='h-full'>
        <SubHeader />
        <Dices diceOne={dices[props.dice1].image} diceTwo={dices[props.dice2].image} />
        <Alternatives rightAnswer={props.rightAnswer} taskNumber={props.taskNumber} alternativeArr={props.alternativeArr} />
  </div>
  )
}

export default Maingame
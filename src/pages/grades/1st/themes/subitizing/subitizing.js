import React from 'react'
import Score from '../../../../../app/layouts/bases/scorebar'
import { useSelector } from 'react-redux'
import PreSchreen from './components/preSchreen'
import Games from './components/games'
import Modal from './components/maingamecomponents/modal'


function SubitizingFirstgrade() {

const showIntro = useSelector((state) => state.tasks.ui.showIntro)
const showModal = useSelector((state) => state.tasks.ui.showModal)


  return (
    <div className='bg-gradient-to-br from-blue-700 via-cyan-100 to-blue-500 bg-fixed'>
      <div className='h-screen flex flex-row'>
        <Score />
        {showIntro ? <PreSchreen /> : null}
        {(!showIntro) ? <Games /> : null}
        {showModal ? <Modal /> : null}
      </div>
    </div>
  )
}

export default SubitizingFirstgrade
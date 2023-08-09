
import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UIresetTask } from '../../../../../../slices/taskSlice'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../../../../../../components/button'
function Finished() {

    const tasks = useSelector((state) => state.tasks.taskManager.tasks)
    const dispatch = useDispatch(

    )
    const [showAmountRight, setShowAmountRight] = useState(false)
    const [rightAmount, setRightAmount] = useState(0)

    const amountOfRight = () => {
        let counter = 0
        for (const task of tasks){
            if (task.status === 'right') counter++
        }
        setRightAmount(counter)
    }  
    
    
    const toggleShow = () => showAmountRight ? setShowAmountRight(false) : setShowAmountRight(true)


    useEffect(() => {
        amountOfRight()
    }, [])

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='bg-page-header w-full h-2/5 flex flex-col items-center justify-center gap-12 text-2xl'>
        <div className='justify-self-start text-white text-4xl'>
            Bra jobba ! Hva vil du gjøre nå?
        </div>
        <div className='flex flex-row'>
            <Button size="lg" variant="subtle" className="m-8" onClick={toggleShow}>Se antall riktige</Button>
            <div>{showAmountRight ? 
            <div className='absolute top-1/3 w-2/5 h-3/5 left-1/3 bg-white flex flex-row justify-center items-center text-4xl'>
                Du fikk {rightAmount} riktige  på 10 spørsmål
                <button onClick={toggleShow} className='absolute top-0 right-0'><FontAwesomeIcon icon={faWindowClose} /></button></div>: 
            null}</div>
            <Button onClick={() => dispatch(UIresetTask())} size="lg" variant="subtle" className="m-8">Spill på nytt</Button>
            <a href='/grade/firstgrade'><Button size="lg" variant='subtle' className="m-8">Tilbake til 1. Klasse</Button></a>

        </div>
        </div>
    </div>
  )
}

export default Finished
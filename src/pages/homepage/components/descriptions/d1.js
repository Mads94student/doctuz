import React from 'react'
import img1 from '../../../../assets/homepagepics/school1.jpeg'


function D1() {
  return (
    <div className='flex h-max flex-row justify-between'>
        <div className='hidden w-1/2 md:flex justify-center items-center ml-2'>
            <img src={img1} alt="None" className='w-1/1 rounded-2xl shadow-lg'/>
        </div>
        <div className='w-1/1 md:w-1/2 h-full flex justify-center items-center'>
            <div className='m-20 text-xl flex flex-col items-center'>
                <div className='text-3xl font-bold'>Hva er Doctuz?</div>
                <br></br>
                <div className='text-2xl'>
                Doctuz er mer enn bare en matematikkundervisningsside. Det er et fellesskap av lærelystne individer som deler en lidenskap for tall og logikk. Vår visjon er å gjøre matematikkundervisning til en spennende reise som fremmer livslang læring og en dyp forståelse av faget. Velkommen til Doctuz, der matte blir magi!
                </div>
            </div>
        </div>
    </div>
  )
}

export default D1
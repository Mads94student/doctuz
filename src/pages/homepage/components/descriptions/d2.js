import React from 'react'
import img2 from '../../../../assets/homepagepics/school2.jpeg'


function D2() {
  return (
    <div className='flex h-max flex-row justify-between'>
        <div className='w-1/1 md:w-1/2 h-full flex justify-center items-center'>
            <div className='m-20 text-xl flex flex-col items-center'>
                <div className='text-3xl font-bold'>Hvordan få tilgang?</div>
                <br></br>
                <div className='text-2xl'>
                For å få tilgang til læringsplattformen "Doctuz", oppretter du en konto ved å registrere deg med din e-postadresse og et passord. Deretter får du tilgang til plattformen ved å logge inn med den opprettede kontoen. Utforsk kurs, leksjoner og oppgaver, og delta i fellesskapet for en inspirerende matematikkopplevelse som fremmer nysgjerrighet og mestring.
                </div>
            </div>
        </div>
        <div className='hidden w-1/2 md:flex justify-center items-center mr-2'>
            <img src={img2} alt="None" className='w-1/1 rounded-2xl shadow-lg'/>
        </div>
    </div>
  )
}

export default D2
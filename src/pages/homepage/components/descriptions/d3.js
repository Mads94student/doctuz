import React from 'react'
import img3 from '../../../../assets/homepagepics/school3.jpeg'


function D3() {
  return (
    <div className='flex h-max flex-row justify-between pb-20'>
        <div className='hidden md:w-1/2 md:flex justify-center items-center ml-2'>
            <img src={img3} alt="None" className='w-1/1 rounded-2xl shadow-lg'/>
        </div>
        <div className='w-1/1 md:w-1/2 h-full flex justify-center items-center'>
            <div className='m-20 text-xl flex flex-col items-center'>
                <div className='text-3xl font-bold'>Hvem har laget Doctuz?</div>
                <br></br>
                <div className='text-2xl'>           
                  Skaperne av "Doctuz" er et lidenskapelig team av matematikere, pedagoger og teknologientusiaster. Deres felles mål var å forme en revolusjonerende læringsplattform som gjør matematikk spennende og tilgjengelig for alle. Med sin ekspertise har de kombinert interaktive leksjoner, kreative oppgaver og en dynamisk læringsmetodikk for å inspirere elevenes nysgjerrighet. Deres engasjement for å tilby en positiv læringsopplevelse har ført til utviklingen av "Doctuz" - en plattform som ikke bare lærer elever matematikk, men også vekker deres lidenskap og glede for faget.
                </div>
            </div>
        </div>
    </div>
  )
}

export default D3
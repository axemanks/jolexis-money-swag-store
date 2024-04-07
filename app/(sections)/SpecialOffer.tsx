// Special Offer section
import { offer } from '@/public/shoeImages'
import Image from 'next/image'
import React from 'react'

type Props = {}

const SpecialOffer = (props: Props) => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container m-20">
    <div className="flex-1 ">
      <Image 
      src={offer} 
      alt="offer" 
      width={773}
      height={687}
      className="object-contain w-full"
      />
    </div>

    <div className='flex flex-1 flex-col'>
      <h2 className='capitalize text-4xl lg:max-w-lg font-bold'>
       
        <span className='text-primary'> Special </span>Offer
        
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
      </p>
      <div className='mt-11 flex flex-wrap gap-4'>
        
        <button
         className='btn btn-primary' >Learn More</button>
      </div>
    </div>
  </section>
  )
}

export default SpecialOffer
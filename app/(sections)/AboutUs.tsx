// This will be the "About Us" section of the site.
// for now we will go over the quality of the products.
import { shoe8 } from '@/public/shoeImages'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutUs = (props: Props) => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container mt-20 mb-20'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-primary'> Super </span>
          <span className='text-primary'>Quality </span> brand
        </h2>
        
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <button className='btn btn-primary'>Shop now</button>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <Image
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default AboutUs
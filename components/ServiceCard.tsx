//Card to display the services

import Image from 'next/image'
import React from 'react'

type ServiceCardProps = {
    imgURL: string,
    label: string,
    subtext: string
}

const ServiceCard = ({ imgURL, label, subtext }:ServiceCardProps) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-16 card-body bg-base-300'>
        {/* Icon */}
        <div className='flex w-11 h-11 justify-center items-center bg-primary rounded-full'>
            <Image 
            src={imgURL} 
            alt={label} 
            width={24} 
            height={24} 
            />
        </div>
{/* Label */}
        <h3 className='mt-5 text-3xl leading-normal font-bold'>{label}</h3>
        {/* Subtext */}
        <p className='mt-3 break-words text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
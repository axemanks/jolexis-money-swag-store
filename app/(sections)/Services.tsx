// Service cards
import ServiceCard from '@/components/ServiceCard'
import React from 'react'
import { services } from '../constants'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service}/>
      ))}
    </section>
  )
}

export default Services
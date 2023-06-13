import React from 'react'
import "../assets/styles/pages/about.scss"
import AboutPgLayout from '../Layouts/AboutPgLayout'
import TestimonialLayout from '../Layouts/TestimonialLayout'

export default function About() {
  return (
    <div className='aboutpage'>
      <AboutPgLayout/>
      <TestimonialLayout/>
    </div>
  )
}

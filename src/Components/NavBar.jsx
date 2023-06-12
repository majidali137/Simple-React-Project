import React from 'react'
import ListItems from './ListItems'

export default function NavBar() {
  return (
    <div className='NavBar'>

      <ListItems name="Home" Link="/"/>
     <ListItems name="About" Link="/about"/>
     <ListItems name="Testimonial"/>
     <ListItems name="FAQ"/>
    </div>
  )
}

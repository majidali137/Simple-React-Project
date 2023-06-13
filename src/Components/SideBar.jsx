import React from 'react'
import ListItems from './ListItems'

export default function SideBar() {
  return (
    <div>
      <ListItems name="Home" Link="/"/>
      <ListItems name="About" Link="/about"/>
      <ListItems name="Testimonial" />
      <ListItems name="FAQ" />
    </div>
  )
}

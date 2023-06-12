import React from 'react'
import ListItems from './ListItems'

export default function SideBar() {
  return (
    <div>
      <ListItems name="Home" />
      <ListItems name="About" />
      <ListItems name="Testimonial" />
      <ListItems name="FAQ" />
    </div>
  )
}

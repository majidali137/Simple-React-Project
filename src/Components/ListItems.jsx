import React from 'react'
import { Link } from 'react-router-dom'

export default function ListItems(props) {
  return (
    <div>
      <ul className='li' >
        <Link to={props.Link} ><li>{props.name}</li></Link>
      </ul>
    </div>
  )
}

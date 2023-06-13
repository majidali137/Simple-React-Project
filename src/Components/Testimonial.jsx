import React from 'react'

export default function Testimonial(props) {
  return (
    <>
          <div className="container">
           <p>
             <span>{props.name}</span>{props.profession}
             <br/>
           </p>
           <p>{props.review}</p>
         </div>
    </>
  )
}

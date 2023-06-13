import React from 'react'

export default function AboutSection(props) {
  return (
    <>
              <div className={props.className}>
          <h4>{props.name}</h4>
          <p>{props.details} </p>
        </div>
    </>
  )
}

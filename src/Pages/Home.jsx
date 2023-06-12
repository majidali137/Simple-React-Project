import React from 'react'
import SideBar from '../Components/SideBar'
import HomePgLayout from '../Layouts/HomePgLayout'

export default function Home() {
  return (
    <>
    <div className="sideBar">
        <SideBar/>
    </div>
    <div className='homePgLayout'>
        <HomePgLayout/>
    </div>
     
    </>
  )
}

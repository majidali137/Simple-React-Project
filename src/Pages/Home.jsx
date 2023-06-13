import React from 'react'
import SideBar from '../Components/SideBar'
import HomePgLayout from '../Layouts/HomePgLayout'
import "../assets/styles/pages/home.scss"

export default function Home() {
  


  return (
    <div className='homepage'>
    <div className="sideBar">
        <SideBar/>
    </div>
    <div className='homePgLayout'>
        <HomePgLayout/>
    </div>
     
    </div>
  )
}

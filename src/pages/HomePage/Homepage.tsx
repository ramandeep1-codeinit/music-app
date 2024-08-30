import React from 'react'
import Sidebar from '../../components/Sidebar'
import Body from '../../components/Body'
import Footer from '../../components/Footer'

const Homepage = () => {
  return (
    <>
    <div className='grid grid-cols-12 gap-0'>
    <div className='col-span-2'><Sidebar /></div>
    <div className='col-span-10'>
     <Body />
    </div>
  </div>
  <div className='fixed'><Footer /></div>
  
  </>
  )
}

export default Homepage
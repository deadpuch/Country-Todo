import React from 'react'
import Nav from '../Navbar/Nav'
import './err.css'

function Errorpage() {
  return (
   <>
   <Nav/>
   <div className='errimgcontainer'>
    <img src="/404.jpg" alt="" />
   </div>
   </>
  )
}

export default Errorpage
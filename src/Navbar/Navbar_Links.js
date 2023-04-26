import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'

function Navbar_Links(props) {


  return (
   <>
   <div  className='links' >
    {/* <a style={{margin:'0px 5px'}}>Home</a>
    <a style={{margin:'0px 5px'}}>About</a>
    <a style={{margin:'0px 5px'}}>Contact Us</a>
    <a style={{margin:'0px 5px'}}>Shop</a> */}
    <a href=""> home</a>
    <a href=""> about</a>
    <a href=""> product</a>
    <a href=""> contact us</a>
   </div>
   <div className='hamburger' style={{padding:'20px'}} >
    <Hamburger onToggle={props.state} />
   </div>
   <div style={{display:'flex',flexDirection:'column'}}>
    <a href=""> home</a>
    <a href=""> about</a>
    <a href=""> product</a>
    <a href=""> contact us</a>
   </div>
   </>
  )
}

export default Navbar_Links
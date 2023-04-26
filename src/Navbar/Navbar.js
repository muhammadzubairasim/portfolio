import React, { useState } from 'react'
import NavbarLogo from './NavbarLogo'
import Navbar_Links from './Navbar_Links'

const Navbar = () => {
    const [mobView,setmobView]= useState(false)
const setstate=()=>{
    setmobView(!mobView)
}
  return (
    <>
    <div className={mobView?'logo-mob':'logo'} >
        <NavbarLogo/> 
        <Navbar_Links state={setstate} />      
    </div>

    </>
  )
}

export default Navbar
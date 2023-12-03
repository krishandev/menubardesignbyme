"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import me from '../public/krishanlogo.svg'
import Link from 'next/link'
import {BsList, BsX} from 'react-icons/bs'

const page = () => {
  const [openmenu, setOpenMenu]=useState(false);
  const toggleMenu=()=>setOpenMenu(!openmenu);
  return (
    <>
    <nav className='bg-red-300 w-full h-21'>
      
      <div className=' border1 flex justify-between items-center w-full px-4'>
      {/* Desktop Menu */} 

      {/* Logo start */}
      <div className='imgContainer'>
        <Image src={me} alt='logo' className='border1 w-full h-21 object-contain'/>
        </div>
      {/* Logo End */}

        

       
      {/* Menu Items Start */}
       <div className='border1 hidden sm:flex'>
         <ul className='flex justify-evenly'>
           <li className='ml-10 text-xl border-b hover:text-blue-500'><Link href={'/'}>Home</Link></li>
           <li className='ml-20 text-xl border-b hover:text-blue-500'><Link href={'/'}>About</Link></li>
           <li className='ml-20 text-xl border-b hover:text-blue-500'><Link href={'/'}>Services</Link></li>
           <li className='ml-20 text-xl border-b hover:text-blue-500'><Link href={'/'}>Contact</Link></li>
         </ul>

       </div>
       {/* Menu Items End */}

       

       <div className=' sm:hidden' onClick={toggleMenu}>
        <BsList  className="w-8 h-8"/>
        </div>
      </div>
      {/* End Desktop Menu */}

      {/* Mobile Menu Start */}
      <div className={openmenu? ' bg-red-100 h-screen w-[75%] fixed top-0 left-0 flex flex-col' :'fixed left-[-100%] top-0 p-10'}>
         
         {/* Cross Sign Start */}
        <div onClick={toggleMenu}>
          <BsX className="h-12 w-12 border1 mt-20 float-right mx-2"/>
        </div>
         {/* Cross Sign End */}
        
        {/* Mobile menu items start */}
         <div>
          <ul className='flex items-center flex-col'>
            <li onClick={()=>setOpenMenu(false)} className='text-xl mt-5 border-b border-black hover:text-blue-500'><Link href={'/'}>Home</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='text-xl mt-5 border-b border-black hover:text-blue-500'><Link href={'/'}>About</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='text-xl mt-5 border-b border-black hover:text-blue-500'><Link href={'/'}>Services</Link></li>
            <li onClick={()=>setOpenMenu(false)} className='text-xl mt-5 border-b border-black hover:text-blue-500'><Link href={'/'}>Contact</Link></li>
          </ul>
         </div>
         {/* Mobile menu items End */}

         <Image src={me} alt='krishan' width={200} height={75}/>

      </div>
      {/* Mobile Menu End */}

    </nav>
    </>
  )
}

export default page
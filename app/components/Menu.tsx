"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links =[
    {id: 1, title: "HomePage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working", url: "/"},
    {id: 4, title: "Contact", url: "/"}
]

function Menu() {

    const[open, setOpen] = useState(false)
    const user =false
    
  return (
    <div >
        {!open ? (
               <Image src={'/open.png'} alt='' width={20} height={20} onClick={()=> setOpen(true)} />
        ) : (
            <Image src={'/close.png'} alt='' width={20} height={20} onClick={()=> setOpen(false)}/>
        )}
        {open &&<div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8 w-full z-10'>
           {
            links.map((link) => (
                <Link href={link.url} key={link.id} onClick={()=> setOpen(false)}>
                {link.title}
                </Link>
            ))}
            {!user?(<Link href="/login" onClick={()=> setOpen(false)}>Login</Link>):(
            <Link href="/orders" onClick={()=> setOpen(false)}>Orders</Link>)}
            <Link href="/cart" onClick={()=> setOpen(false)}><CartIcon /></Link>
        </div>}
    </div>
  )
}

export default Menu
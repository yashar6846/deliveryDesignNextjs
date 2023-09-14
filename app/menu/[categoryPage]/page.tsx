import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryPage() {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item)=>(
      <Link className='w-full h-[60vh] border-r-2 flex flex-col justify-between border-b-2 sm:w-1/2 lg:w-1/3 border-red-500 p-4 group odd:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
        {item.img && (
          <div className="relative h-[80%]">
            <Image src={item.img} alt="" fill className=' object-contain'/>
          </div>
        )}
        <div className="flex items-center justify-between font-bold">
          <h1 className="text-2xl uppercase p-2">{item.title}</h1>
          <h2 className=" group-hover:hidden text-xl">${item.price}</h2>
          <button className=" hidden group-hover:block uppercase bg-red-500  text-white rounded-md p-2">Add to Cart</button>
        </div>
      </Link>
      ))}
    </div>
  )
}


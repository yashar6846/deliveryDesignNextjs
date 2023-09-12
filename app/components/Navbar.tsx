import Image from "next/image";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";


export default function Navbar() {
    const user =false;

  return (
   <div className='h-12 text-red-500 p-4 flex justify-between items-center  border-b-2 border-b-red-500 uppercase md:h-24'>
    {/* LEFT LINKS */}
    <div className="hidden md:flex gap-4">
    <Link href={'/'}>Homepage</Link>
    <Link href={'/menu'}>Menu</Link>
    <Link href={'/'}>Contact</Link>
    </div>
     {/* LOGO */}
    <div className="text-xl md:font-bold">
        <Link href="/">Massimo</Link>
    </div>
    {/* MOBILE MENU */}
    <div className="md:hidden">
    <Menu />
    </div>
    {/* RIGHT LINKS */}
    <div className="hidden md:flex gap-4 items-center">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1  rounded-md">
            <Image src="/phone.png" alt="" width={20} height={20} />
            <span>05071931319</span>
        </div>
       {!user ?( 
         <Link href={'/login'}>Login</Link>
        
       ):(
        <Link href={'/orders'}>Orders</Link>
       )}
       <CartIcon />
    </div>
   </div>
  )
}

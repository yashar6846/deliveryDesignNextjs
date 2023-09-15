import Link from "next/link"


function Footer() {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between">
      <Link href={"/"} className="font-bold text-5xl">MASSIMO</Link>
      <p>@ ALL Rights Reserved.</p>
    </div>
  )
}

export default Footer
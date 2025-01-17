import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/brandkit/logo.png'
import Link from 'next/link'
import NavBarMobile from '../UI/NavBarMobile';



const NavBarAuth = () => {
  const [active, setActive] = useState(false);
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      isActive();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <>
      <div className={`flex md:hidden z-99  items-center bg-light rounded-b-lg  justify-between text-[15px] font-bold text-dark/70 pt-10 pb-8 ${active ? "sticky top-0 shadow-lg shadow-theme/80" : ""}`}>
        <Link href="/" className="flex items-center gap-5 ml-10">
          <Image src={logo} alt="logo" className="w-12 h-12 rounded-full shadow-lg shadow-theme bg-green-200" />
          <h1 className="text-xl font-serif md:hidden">MBEGU-<b className="text-xl font-extrabold italic">AFRICA</b></h1>
        </Link>
        <nav className="flex items-center justify-center gap-8 mr-10">
          <Link href="/login/page" className="hover:text-theme text-">Login</Link>
          <Link href="" className="text-dark font-extrabold text- shadow-sm px-2 py-1 bg-theme/40 rounded-md shadow-theme">Sign Up</Link>
        </nav>
      </div>
      <NavBarMobile />
    </>
  )
}

export default NavBarAuth;
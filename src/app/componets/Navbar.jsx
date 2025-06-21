import React, { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translatex(16rem)'
  }

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    });
  },[]);

  return (
    <>
    <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-80%]'>
      <img src="arora2.jpg" alt="arora" className='w-full'/>
    </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-whitebg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>

        <div className="flex items-center gap-2">
  <a href="/">
    <img
      src="/DK.png"
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
      alt="Logo"
    />
  </a>
  <h2 className="text-lg sm:text-2xl font-Ovo">DIVYA KUMARI</h2>
</div>


        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
        ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#services">Experience</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          {/* <button>
            <img src="/moon.png" alt="moon" className='w-6 cursor-pointer'/>
          </button> */}
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <img src="/right-up.png" className="w-5" alt="right-up"/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
              <img src="/menu.png" alt="menu" className='w-6 cursor-pointer'/>
            </button>
        </div>

        {/*---mobile menu ---*/}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-40 z-50 h-screen bg-rose-50 transition duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <img src="/close.png" alt="close" className='w-5 cursor-pointer'/>
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Experience</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

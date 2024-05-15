import React from 'react'
import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';



const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="padding-x py-8 z-10 w-full absolute">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden px-44">
                {navLinks.map((item) => (
                    <li key={item.lable}>
                        <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden max-lg:block px-15">                
                <img onClick={() => setOpen(true)} src={hamburger} alt="Hamburger" className="w-5 h-5 object-cover"/>
                {
                    open && (
                    <div className="bg-white p-1 w-40 shadow-lg absolute right-12 rounded-lg">
                    <ul className="flex-col">
                        {navLinks.map((item) => (
                            <li onClick={() => setOpen(false)} className="p-1 text-sm hover:bg-slate-300" key={item.lable}>
                                <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    </div> 
                )}
                               
            </div>
        </nav>
    </header>
  )
}

export default Nav
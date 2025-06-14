import { useState } from "react";

import {navItems} from '../contant/index'


const MobMenu = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>

              <div className="group flex cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200">
                <div className="space-y-2 flex flex-col items-end">
                  <span
                    className={`block h-1 w-10 origin-center rounded-full bg-slate-500 transition-transform ease-in-out
                      ${mobileDrawerOpen ? 'translate-y-1.5 rotate-45' : ''}
                      group-hover:translate-y-1.5 group-hover:rotate-45`}
                  ></span>
                  <span
                    className={`block h-1 w-6 origin-center rounded-full bg-orange-500 transition-all ease-in-out
                      ${mobileDrawerOpen ? 'w-10 -translate-y-1.5 -rotate-45' : ''}
                      group-hover:w-10 group-hover:-translate-y-1.5 group-hover:-rotate-45`}
                  ></span>
                </div>
              </div>

            </button>
            
            {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 bg-gray-400 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className="py-4">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
                <div className="space-x-6 ">
                    <a href="#" className="py-2 px-3 border rounded-md">
                      Log In
                    </a>
                    <a href="#" className="py-2 px-3 rounded-md ">
                        Sing Up
                    </a>
                </div>
            </div>
        )}
        </div>

        
    )
}

export default MobMenu

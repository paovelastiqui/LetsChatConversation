import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [menuMob, setMenuMob] = useState(true);

  return (
    <nav className="bg-stone-800 w-full fixed">
      <div className="mx-auto max-w-6xl px-2 lg:px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="absolute left-2 top-2 flex items-center md:hidden">
            {/* Menu Button */}
            <button id="menuButton" type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-stone-50 hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setMenuMob(!menuMob)}>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center md:justify-between">
            <a href="#">
              <div className="flex flex-col flex-shrink-0 items-center">
                <p className="text-stone-50 text-l font-normal font-dela">LET'S</p>
                <p className="text-stone-50 text-l font-normal font-dela">CHAT</p>
              </div>  
            </a>
            
            <div className="hidden md:flex lg:block ">
              <div className="flex items-center space-x-4">
                <li className="text-white list-none">
                  <a href="#Team" className="rounded-md px-3 py-2 text-sm font-medium text-stone-50 hover:bg-orange-400 hover:text-stone-950">
                    El Team
                  </a>
                </li>
                <li className="text-white list-none">
                  <a href="#Polly" className="rounded-md px-3 py-2 text-sm font-medium text-stone-50 hover:bg-red-400 hover:text-stone-950">
                    Clases con Polly
                  </a>
                </li>
                <li className="text-white list-none">
                  <a href="#Raque" className="rounded-md px-3 py-2 text-sm font-medium text-stone-50 hover:bg-red-500 hover:text-stone-950">
                    Clases con Raque
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuMob ? (
        <div className="hidden"></div>
      ) : (
        <div className="lg:hidden" id="mobile-menu">
          <div className="bg-stone-800 space-y-1 px-2 pb-3 pt-2">
            <li className="text-white list-none">
              
                <a href="#Team" className="w-full rounded-md px-3 py-2 text-base font-medium text-stone-50 hover:bg-orange-400 hover:text-stone-950">
                  El Team
                </a>
              
            </li>
            <li className="text-white list-none">
              
                <a href="#Polly" className="w-full rounded-md px-3 py-2 text-base font-medium text-stone-50 hover:bg-red-400 hover:text-stone-950">
                  Clases con Polly
                </a>
              
            </li>
            <li className="text-white list-none">
             
                <a href="#Raque" className="w-full rounded-md px-3 py-2 text-base font-medium text-stone-50 hover:bg-red-500 hover:text-stone-950">
                  Clases con Raque
                </a>
            
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};

import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {
  // Change URL to current home page
  const [active, setActive] = useState("");
  // For mobile toggle state
  const [toggle, setToggle] = useState(false);

  return ( 
    <nav className ={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 
    bg-primary}`
    }>

   <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
     <Link
       to="/"
       className="flex items-center gap-2"
       onClick={() => {
         window.scrollTo(0, 0);
       }}
     >

      {/*---------------------------------------------------------------------------------------*/}      
      {/* Render the Title and Logo with appropriate fonts and sizes using TailWind */}
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
          Niranjana Sundararajan &nbsp;
          <span className="sm:block hidden">| Dev</span>
          </p>
      </Link>

      {/* --------------------------------------------------------------------------------------*/}
      {/*  Add the About, Work and contact Sections to the navigation bar */}
      <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                // If the links are active - show them in white - if not ; grey them out
                active === nav.id 
                ? "text-white" 
                : "text-secondary"
              } hover:text-white text-[18px] 
              font-medium cursor-pointer`}
              onClick={()=>setActive(nav.title)}
            >
              {/* Ensure each of the links when clicked change the URL  */}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

      {/*------------------------------------------------------------------------------------ */}
      {/*  Add the compressed sandwich bar for mobile users */}
      

    </div>
   </nav>
  )
}

export default Navbar
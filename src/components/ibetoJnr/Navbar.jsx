import React, { useState } from "react";
import "../stylesheet/MainSiteStyle.css";
import ibetologotext from "../images/ibetologotext.svg";

const Navbar = () => {
   const [checked, setChecked] = useState(false);
   const handleClick = () => setChecked(!checked);

   return (
      <div className=''>
         <div className='menu-wrap'>
            <input type='checkbox' className='toggler' onClick={handleClick} checked={checked} onChange={(e) => {}} />
            <div className='hamburger'>
               <div></div>
            </div>
            <div className='menu'>
               <div>
                  <div>
                     <ul style={{ padding: "0" }} className='overlay-content pt-2'>
                        <li onClick={handleClick}>
                           <a href='#home'>Home</a>
                        </li>
                        <li onClick={handleClick}>
                           <a href='#About'>About</a>
                        </li>
                        <li onClick={handleClick}>
                           <a href='#event_format'>Event Format</a>
                        </li>
                        <li onClick={handleClick}>
                           <a href='#Rewards'>Rewards</a>
                        </li>
                        <li onClick={handleClick}>
                           <a href='#Timeline'>Timeline</a>
                        </li>
                        <li onClick={handleClick}>
                           <a href='#FAQ'>FAQ</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className=''>
            <a href='https://ibetojr.excelmec.org/'>
               {" "}
               <img className='navbar-brand1' src={ibetologotext} alt='' />
            </a>
         </div>
      </div>
   );
};

export default Navbar;

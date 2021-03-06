import React from "react";
import "../stylesheet/Footer.css";
import "../stylesheet/ResponsiveStyle.css";
import logo from "../images/logo.svg";
import mec_logo from "../images/mec_logo1.png";
import ln from "../images/linkedin.png";
import fb from "../images/facebook.png";
import insta from "../images/insta.png";
//
const Footer = () => {
   return (
      <div className='container-fluid footer'>
         <footer class='section section-8 flex-rw footer123'>
            <div class='footerDiv'>
               <div class='footerIbeto'>
                  <a href='http://www.mec.ac.in/' target='blank'>
                     <img src={mec_logo} />
                  </a>
               </div>

               <div class='icon1'>
                  <a href='https://www.linkedin.com/company/excelmec' target='blank'>
                     <img src={ln} />
                  </a>
               </div>
               <div class='icon2'>
                  <a href='https://www.facebook.com/excelmec/' target='blank'>
                     <img src={fb} />
                  </a>
               </div>
               <div class='icon3'>
                  <a href='https://www.instagram.com/excelmec/' target='blank'>
                     <img src={insta} />
                  </a>
               </div>
               <div class='footerExcel'>
                  <a href='https://excelmec.org/#/' target='blank'>
                     <img src={logo} />
                  </a>
               </div>
               <div class='Excelbrand'>
                  <span class='Excelbrand-text'>Made with ♥ Excel 2021</span>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;

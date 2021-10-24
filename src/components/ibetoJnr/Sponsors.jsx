import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/Sponsors.css";
import "../stylesheet/ResponsiveStyle.css";

import AVT from "../images/AVT.png";
import DSC from "../images/DSC.png";
// import Pehia from "../images/Pehia.jpg";

const Sponsors = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);

   return (
      <div className='container' id='Sponsors'>
         <h2 align='center' className='heading '>
            In associ<span>ation with</span>
         </h2>
         <div className='row text-center no-gutters clients-wrap clearfix wow fadeInUp'>
            <div className=' col-md-5 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <a href='https://www.avtnatural.com/'>
                     <img src={AVT} className='img-fluid' alt='AVT' />
                  </a>{" "}
               </div>
            </div>
            <div className=' col-md-7 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <a href='https://gdsc.community.dev/government-model-engineering-college-thrikkakara/'>
                     {" "}
                     <img src={DSC} className='img-fluid' alt='DSC' />
                  </a>{" "}
               </div>
            </div>

            {/* <div className=' col-md-4 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <a href='https://www.pehia.org/ '>
                     <img src={AVT} className='img-fluid' alt='' />
                  </a>{" "}
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default Sponsors;

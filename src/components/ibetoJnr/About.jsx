import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import logo from "../images/ibetologo.svg";
const About = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid about-bk' id='About'>
         <div className='row about'>
            <div data-aos='fade-right' className='col-md-4 col-xs-12'>
               <img src={logo} alt='ibeto-logo' className='about-logo img-fluid' />
            </div>
            <div data-aos='fade-left' className='about-section col-md-7 col-xs-12 '>
               <h2 className='heading mb-4 '>
                  Abo<span>ut</span>
               </h2>
               <div className='content about-content'>
                  <p>
                     <b>IBeTo Junior 2021</b> (Innovations for a Better Tomorrow Junior) is an initiative of Excel 2021 aimed at unfolding technologically innovative ideas from <b>7th to 12th grade school students</b>. Under efficient mentorship and with the provision of necessary tools and
                     resources, we intend to provide the right platform for developing the creative proposals.
                  </p>
               </div>
               <div className=''>
                  <a target='_blank' rel='noreferrer' href='https://bit.ly/IBeToJr_Registration'>
                     <button className='btn mt-4 blob-btn abt-btn button-shadow'>
                        Register
                        <span className='blob-btn__inner'>
                           <span className='blob-btn__blobs'>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                           </span>
                        </span>
                     </button>
                  </a>
                  <a target='_blank' rel='noreferrer' href='https://drive.google.com/file/d/1YG_ZRYsXDhUKfXoIv1v1K2WyOLp5-y6Q/view'>
                     <button className='btn mt-4 blob-btn guidlines-btn button-shadow'>
                        Guidelines
                        <span className='blob-btn__inner'>
                           <span className='blob-btn__blobs'>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                              <span className='blob-btn__blob'></span>
                           </span>
                        </span>
                     </button>
                  </a>
                  <br />
                  <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
                     <defs>
                        <filter id='goo'>
                           <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur>
                           <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7' result='goo'></feColorMatrix>
                           <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
                        </filter>
                     </defs>
                  </svg>{" "}
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;

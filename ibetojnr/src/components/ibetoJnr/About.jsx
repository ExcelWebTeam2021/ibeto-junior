import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import ibeto_junior_logo from "../images/ibetologo.svg"

const About = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid about-bk' id='about'>
         <br />
         <br />
         <br />
         <br />
         <div className='row about'>
            <div data-aos='fade-right' className='col-md-4 col-xs-12'>
               <img src={ibeto_junior_logo} alt='ibeto-logo' className='img-fluid' />
            </div>
            <div data-aos='fade-left' className='col-md-7 col-xs-12 '>
               <h2 className='heading mb-4 '>
                  Abo<span>ut</span>
               </h2>
               <div className='content'>
                  <p>Ibeto junior Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt. Model Engineering College, Kochi as part of their annual national-level technical symposium, Excel 2020.</p>{" "}
               </div>
               <div className="">
              <button className="btn mt-4 blob-btn abt-btn button-shadow">
                Register
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            <button className="btn mt-4 blob-btn abt-btn button-shadow">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/1mnf_TGXzcwBNRTSdzNGy3cDU3ovMcZ2h/view"
                className="blob-btn-text"
              >
                Guidelines
              </a>
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
            <br />
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    result="blur"
                    stdDeviation="10"
                  ></feGaussianBlur>
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                    result="goo"
                  ></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
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

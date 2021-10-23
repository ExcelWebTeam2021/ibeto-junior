import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import whyparticipate1 from "../images/whyparticipate-boy.svg";
import whyparticipate2 from "../images/whyparticipate-girl.svg";
function WhyParticipate() {
   useEffect(() => {
      AOS.init({ duration: 1300 });
   }, []);
   return (
      <div className='container-fluid whyparticipate-row  '>
         <div className='row'>
            <div className='col-md-3 whyparticipate_boy_div' data-aos='fade-left'>
               <img className='whyparticipate_boy' src={whyparticipate1} alt='' />
            </div>
            <div className='col-md-6 whyparticipate-content' data-aos='fade-in'>
               <h2 className='whyparticipate-heading heading text-center' style={{ marginTop: "3%" }}>
                  Why should you not miss the opportunity?
               </h2>
               <ul>
                  <li className='content whyparticipate-detail'>A headstart into the field of technology </li>
                  <li className='content whyparticipate-detail'>A golden chance to win prizes worth Rs. 15,000</li>
                  <li className='content whyparticipate-detail'>Great opportunity to build strong networks </li>

                  <li className='content whyparticipate-detail'>Mentorship from experts, to develop the project </li>

                  <li className='content whyparticipate-detail'>Technical sessions to support project development </li>
               </ul>
            </div>
            <div className='col-md-3 whyparticipate_girl_div' data-aos='fade-right'>
               <img className='whyparticipate_girl' src={whyparticipate2} alt='' />
            </div>
         </div>
      </div>
   );
}

export default WhyParticipate;

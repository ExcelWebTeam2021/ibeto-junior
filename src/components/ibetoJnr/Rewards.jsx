import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import reward from "../images/rewards.svg";

const Rewards = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container rewards-row  '>
         <div className='justify-content-center row' id='Rewards'>
            <div data-aos='fade-right' className='col-md-4 col-sm-10 '>
               <img src={reward} alt='reward' className='rewards-img1 img-fluid' />
            </div>

            <div className='col-md-8 col-sm-10 jrn-rewards' data-aos='fade-left' style={{ textAlign: "left" }}>
               <h2 className='heading reward-heading'>
                  Rew<span>ards</span>
               </h2>
               <br />
               <ul className='content rewards-list'>
                  <li>Prizes worth ₹15,000 for the top 3 teams.</li>
                  <li>Certificate of participation and special mentions for the non-winning teams </li>
               </ul>
            </div>
            <div data-aos='fade-right' className='col-md-4 col-sm-10 '>
               <img src={reward} alt='reward' className='rewards-img2 img-fluid' />
            </div>
         </div>
      </div>
   );
};

export default Rewards;

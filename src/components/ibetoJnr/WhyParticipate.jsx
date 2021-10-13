import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/WhyParticipate.css";
import "../stylesheet/ResponsiveStyle.css";
import whyparticipate1 from "../images/whyparticipate-boy.svg";
import whyparticipate2 from "../images/whyparticipate-girl.svg";
function WhyParticipate() {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);
   return (
      <div className='container-fluid whyparticipate-row  ' data-aos='fade-in'>
         <h2 className='container heading mb-5 text-center' style={{ marginTop: "3%" }}>
            Why<span> Participate</span>
         </h2>
         <div className='row'>
            <div className='col-md-3'>
               <img src={whyparticipate1} alt='' width='350' height='350' />
            </div>
            <div className='col-md-6'>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit eaque amet blanditiis suscipit a autem ab consectetur dicta accusamus eveniet maxime, aperiam laboriosam ipsa quasi molestias nemo! Sunt minus autem nesciunt commodi magni aperiam quisquam eligendi nemo
               repudiandae, quam esse?
            </div>
            <div className='col-md-3'>
               <img src={whyparticipate2} alt='' width='350' height='350' />
            </div>
         </div>
      </div>
   );
}

export default WhyParticipate;

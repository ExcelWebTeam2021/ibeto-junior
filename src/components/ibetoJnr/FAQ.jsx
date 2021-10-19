import React, { useEffect, useRef } from "react";
import AOS from "aos";
import lottie from "lottie-web";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/FAQ.css";
export default function FAQ() {
   useEffect(() => {
      AOS.init({ duration: 1000 });
      return () => {}; // clean up for unmounting
   }, []);

   return (
      <div data-aos='fade-in' className='container mt-4 mb-5' id='FAQ' data-aos-delay='250'>
         <h2 className='heading faq-heading'>
            Frequently Ask<span>ed Questions</span>
         </h2>
         <div className=''>
            <div className=''>
               <div className='accordion content'>
                  <div className='accordion-item'>
                     <button id='accordion-button-1' data-toggle='collapse' href='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>
                        <span className='accordion-title'>Will there be a registration fee to participate in IBeTo 2021?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample1'>
                        <p>No. You can register for IBeTo 2021 free of cost.</p>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <button id='accordion-button-4' aria-expanded='false' data-toggle='collapse' href='#collapseExample4' aria-controls='collapseExample4'>
                        <span className='accordion-title'>Can I form a team with students of other schools?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample4'>
                        <p>Yes. Cross institution participation is encouraged.</p>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <button id='accordion-button-6' aria-expanded='false' data-toggle='collapse' href='#collapseExample6' aria-controls='collapseExample6'>
                        <span className='accordion-title'>How will I be informed about the rounds?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample6'>
                        <p>You will be informed through your registered email-id and phone number.</p>
                     </div>
                  </div>

                  <div className='accordion-item'>
                     <button id='accordion-button-2' data-toggle='collapse' href='#collapseExample2' aria-expanded='false' aria-controls='collapseExample2'>
                        <span className='accordion-title'>Is the final presentation online or offline?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample2'>
                        <p>The presentation will be through any suitable Online platform. .</p>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <button id='accordion-button-3' aria-expanded='false' data-toggle='collapse' href='#collapseExample3' aria-controls='collapseExample3'>
                        <span className='accordion-title'>Should I develop the product or is a prototype sufficient?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample3'>
                        <p>A completed product is more preferable, although just a prototype is also acceptable. However, an actual product will be given more preference over a prototype.</p>
                     </div>
                  </div>

                  <div className='accordion-item'>
                     <button id='accordion-button-5' aria-expanded='false' data-toggle='collapse' href='#collapseExample5' aria-controls='collapseExample5'>
                        <span className='accordion-title'>Is there an age limit for participation?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample5'>
                        <p>Yes you have to be a student of any class from 7th std to 12th std, and under 19 years of age.</p>
                     </div>
                  </div>
                  <div className='accordion-item'>
                     <button id='accordion-button-11' aria-expanded='false' data-toggle='collapse' href='#collapseExample11' aria-controls='collapseExample3'>
                        <span className='accordion-title'>Should the project be software based or hardware based?</span>
                        <span className='icon plus-icon' aria-hidden='true'></span>
                     </button>
                     <div className='collapse content' id='collapseExample11'>
                        <p>It could be either or both. The primary requirement is that it should be a socially and technologically innovative project idea.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

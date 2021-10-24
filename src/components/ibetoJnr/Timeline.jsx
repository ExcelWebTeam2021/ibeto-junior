import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Timeline.css";

const Timeline = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);
   return (
      <div className='container ' id='Timeline'>
         <div className=' jnr-timeline-row '>
            <h2 align='center' className='heading '>
               Time<span className='heading-span'>line</span>
            </h2>

            <div className='row'>
               <ul className='timeline'>
                  <li>
                     <div className='direction-r'>
                        <div className='flag-wrapper' data-aos='fade-in' data-aos-delay='200'>
                           <span className='hexa'></span>
                           <span className='time content'> 26th October 2021</span> <br />
                           <span className='flag content'>Start of registration & idea submission</span>
                        </div>
                     </div>
                  </li>

                  <li>
                     <div className='direction-l'>
                        <div className='flag-wrapper' data-aos='fade-in' data-aos-delay='200'>
                           <span className='hexa'></span>
                           <span className='time content'>7th November, 2021</span> <br />
                           <span className='flag content'>Idea submission deadline </span>
                        </div>
                     </div>
                  </li>

                  <li>
                     <div className='direction-r'>
                        <div className='flag-wrapper' data-aos='fade-in' data-aos-delay='200'>
                           <span className='hexa'></span>
                           <span className='time content'> 16th November, 2021</span> <br />
                           <span className='flag content'>Start of Create phase</span>
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className='direction-l'>
                        <div className='flag-wrapper' data-aos='fade-in' data-aos-delay='200'>
                           <span className='hexa'></span>
                           <span className='time content'> 2nd January, 2022</span> <br />
                           <span className='flag content'>End of Create phase</span>
                        </div>
                     </div>
                  </li>

                  <li>
                     <div className='direction-r'>
                        <div className='flag-wrapper' data-aos='fade-in' data-aos-delay='200'>
                           <span className='hexa'></span>
                           <span className='time content'> First week of January 2022 </span> <br />
                           <span className='flag content'>Project presentation</span>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Timeline;

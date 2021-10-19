import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

export default function EventFormat() {
   const EventPhaseOne = useRef(null);
   const EventPhaseTwo = useRef(null);
   const EventPhaseThree = useRef(null);

   useEffect(() => {
      const anime1 = lottie.loadAnimation({
         container: EventPhaseOne.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/Event Phase1.json"),
      });
      const anime2 = lottie.loadAnimation({
         container: EventPhaseTwo.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/Event Phase2.json"),
      });
      const anime3 = lottie.loadAnimation({
         container: EventPhaseThree.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/Event Phase3.json"),
      });
      AOS.init({ duration: 1000 });
      return () => {
         anime1.destroy();
         anime2.destroy();
         anime3.destroy();
      }; // clean up for unmounting
   }, []);

   return (
      <div className='container-fluid text-center jnr-event_format' id='event_format'>
         <h2 className='container heading '>
            Event<span> Format</span>
         </h2>

         <div className='row event-format'>
            <div data-aos='fade-in' className='col-md-3 col-sm-10 phase'>
               <div className='' ref={EventPhaseOne}></div>
               <div className=''>Phase 1</div>
               <h3 className='event-title event-format-heading'>Ideate</h3>
               <p className='content event-format-content text-left'>Teams will be submitting ideas which are technologically relevant and have a positive impact on the society. The project ideas can be based on any socially relevant theme.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='200' className='col-md-3 col-sm-10 phase'>
               <div className='' ref={EventPhaseTwo}></div>
               <div>Phase 2</div>
               <h3 className='event-title event-format-heading'>Create</h3>
               <p className='content event-format-content text-left'>Teams shortlisted after the Ideate Phase will be building their prototypes during this period. At this stage the teams will be assigned a mentor to help them in project development.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='400' className='col-md-3 col-sm-10 phase'>
               <div className='' ref={EventPhaseThree}></div>
               <div>Phase 3</div>
               <h3 className='event-title event-format-heading'>Showcase</h3>
               <p className='content event-format-content text-left'>The teams will have to present their project along with a demonstration of the working prototype in front of the judges on Day 1 of Excel, which will be judged primarily based on their social relevance.</p>
            </div>
         </div>
      </div>
   );
}

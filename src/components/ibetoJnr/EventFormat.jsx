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
               <p className='content event-format-content text-left'>Participants will undergo an online evaluation with respect to technical aspects that supplement a project. 25 teams will be shortlisted and asked to send a detailed abstract.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='200' className='col-md-3 col-sm-10 phase'>
               <div className='' ref={EventPhaseTwo}></div>
               <div>Phase 2</div>
               <h3 className='event-title event-format-heading'>Create</h3>
               <p className='content event-format-content text-left'>25 teams shortlisted into the quarterfinals will be asked to send in their project plans and assigned mentors to whom the teams are to report to.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='400' className='col-md-3 col-sm-10 phase'>
               <div className='' ref={EventPhaseThree}></div>
               <div>Phase 3</div>
               <h3 className='event-title event-format-heading'>Showcase</h3>
               <p className='content event-format-content text-left'>The teams are to submit a video presentation along with a demonstration of their working prototype in front of the judges on Day 0 of Excel 2020, which will be the final judgement.</p>
            </div>
         </div>
      </div>
   );
}

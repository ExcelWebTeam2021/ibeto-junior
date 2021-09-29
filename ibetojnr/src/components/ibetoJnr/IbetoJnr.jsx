import React from "react";
import About from "./About";
import EventFormat from "./EventFormat";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import Timeline from "./Timeline";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Rewards from "./Rewards";
import WhyParticipate from "./WhyParticipate";

const IbetoJnr = () => {
   return (
      <div className= 'ibeto-mainsite'>
         <div>
            {" "}
            <Navbar />
            <LandingPage />
            <About />
            
            <EventFormat />
            <br/>
            <WhyParticipate />
            <Rewards />
            <Timeline />
            <Testimonials />
            <FAQ />
            <Footer />
         </div>
      </div>
   );
};

export default IbetoJnr;

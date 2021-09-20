import React from "react";
import About from "./About";
import EventFormat from "./EventFormat";
import Testimonials from "./Testimonials";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";

const IbetoJnr = () => {
   return (
      <div>
         <Navbar />
         <LandingPage />
         <About />
         <EventFormat />
         <Testimonials />
      </div>
   );
};

export default IbetoJnr;

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Lookingfor = () => {
   const lookingfor = useRef(null);
   useEffect(() => {
      AOS.init({ duration: 1100 });
      const anime1 = lottie.loadAnimation({
         container: lookingfor.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/Bot.json"),
      });
   }, []);

   return (
      <div className='container-fluid lookingfor-row  '>
         <div className='justify-content-center row'>
            <div className='col-md-9 ' data-aos='fade-left' style={{ textAlign: "left" }}>
               <h2 className='heading text-center'>What are we looking for ?</h2>
               <br />
               <p className='content'>
                  We are looking for innovative minds, who can come up with solutions for any social problems that they find in our society. The ideas should be something a little more than the quintessential science project, something technically innovative and socially beneficial. The idea will be
                  judged on originality, creativity and implementability. If the idea is selected, during the create phase, a project guide with expertise in the field of technology, will be assigned to offer you technical help/advice in building the project.{" "}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Lookingfor;

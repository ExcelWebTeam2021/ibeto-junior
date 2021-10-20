import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Lookingfor = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid lookingfor-row  '>
         <div className='justify-content-center row'>
            <div className='col-md-9 ' data-aos='fade-left'>
               <h2 className='heading text-center'>What are we looking for ?</h2>
               <br />
               <p className='content lookingfor-content'>
                  We are looking for innovative minds, who can come up with solutions for any social problems that they find in our society. The ideas should be something a little more than the quintessential science project, something technically innovative and socially beneficial. The idea will be
                  judged on originality, creativity and implementability. If the idea is selected, during the create phase, a project guide with expertise in the field of technology, will be assigned to offer you technical help/advice in building the project.{" "}
               </p>
            </div>
         </div>
      </div>
   );
};

export default Lookingfor;

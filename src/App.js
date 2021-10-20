import React, { useEffect } from "react";
import IbetoJnr from "./components/ibetoJnr/IbetoJnr";
import ReactGA from "react-ga";

ReactGA.initialize("UA-205580679-1");
ReactGA.pageview(window.location.pathname + window.location.search);

function App({ hideLoader }) {
   useEffect(() => {
      hideLoader();
   });
   return (
      <div className='App'>
         <IbetoJnr />
      </div>
   );
}

export default App;

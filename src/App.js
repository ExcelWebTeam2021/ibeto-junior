import React, { useEffect } from "react";
import IbetoJnr from "./components/ibetoJnr/IbetoJnr";

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

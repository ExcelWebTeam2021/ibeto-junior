import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./App.css";

const loader = document.querySelector(".loader_container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

ReactDOM.render(
   <React.StrictMode>
      <App hideLoader={hideLoader} showLoader={showLoader} />
   </React.StrictMode>,
   document.getElementById("root")
);

reportWebVitals();

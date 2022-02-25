import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BasicInfo from "./components/BasicInfo";
import About from "./components/About";
import Footer from "./components/Footer";
import Interest from "./components/Interest";

function MyApp() {
  return (
    <div className="myApp">
      <BasicInfo />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));

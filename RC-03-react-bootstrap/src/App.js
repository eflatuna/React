import "./App.css";

import React from "react";

//!bootstrap in yolunu import etmeliyiz, dilersek bunu index.js ye de yapabiliriz
import "bootstrap/dist/css/bootstrap.min.css";

import dataA from "./data";

import CourseCard from "./components/CourseCard";
import MyNavbar from "./components/MyNavbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
    <MyNavbar/>
    <Slider/>
      <CourseCard veri={dataA} />
    </div>
  );
}

export default App;

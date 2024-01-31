import { useState } from "react";
import "./main.css";
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Section from "./Components/section";
import Container from "./Components/Item-Container";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";

function App() {
  return (
    <>
      <Navbar />
      <Container />
      {/* <Banner/>
    <Section header="Fantasy" img1={Img1} img2={Img2}/> */}
    </>
  );
}

export default App;

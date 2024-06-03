import React from "react";
import Home from "@/components/Home";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import CopyRight from "@/components/CopyRight";
import Slogan from "@/components/Slogan";

const Index = () => {
  return (
    <div className="container">
      <NavBar />

      <div id="home"></div>
      <Home />

      <div id="about"></div>
      <About />

      <div id="slogan">
        <Slogan />
      </div>

      <div id="services"></div>
      <Services />


      <div id="footer"></div>
      <Footer />
      <CopyRight />
    </div>
  );
};

export default Index;

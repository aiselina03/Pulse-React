import React from "react";
import OurMenu from "../../components/OurMenu";
import { Helmet } from "react-helmet-async";
import SliderImage from "../../components/SliderImage";
import Testimionals from "../../components/Testimionals";
import Welcome from "../../components/Welcome";
import Services from "../../components/Services";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="home">
        <SliderImage /> 
        <Welcome/>
        <Testimionals />
        <Services/>
        <OurMenu />
      </div>
    </>
  );
}

export default Home;

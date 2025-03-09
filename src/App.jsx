import React from "react";
import Hero from "./Components/Hero";
import Products from "./Components/Products/Products";
import { UpdateFollower } from "react-mouse-follower";
import Banner from "./Components/Banner/Banner";
import BannerText from "./Components/Banner/BannerText";
import Blogs from "./Components/Blogs/Blogs";
import FAQ from "./Components/FAQ/FAQ";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="overflow-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <Products />
        <Banner />
        <BannerText />
        <Blogs />
        <FAQ />
        <Footer />
      </UpdateFollower>
    </div>
  );
}

export default App;

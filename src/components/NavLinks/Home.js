import React from "react";
import Header from "../Header";
import Slider from "../Slider";
import About from "./About";
import Contact from "./Contact";
// import ProductList from "../ProductList";
import Footer from "../Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Slider />
        <About />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Home;

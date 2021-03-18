import React, { Component } from "react";
import MainLanding from "./MainLanding";

import Promotion from "./Promotion";
import Articles from "./Articles";
import Header from "./Header";
import Footer from "./Footer";


class Landing extends Component {
  ;
  render() {

   
    return (
      <>
          <Header />
          <MainLanding  />
          <Promotion />
          <Articles />
          <Footer />
      </>
    );
  }
}

export default Landing;
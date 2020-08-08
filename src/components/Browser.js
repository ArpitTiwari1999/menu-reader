import React from 'react';
import NavBar from "../container/NavBar";
import Footer from "./Browser/Footer";
import Main from "../container/Browser/Main";

function Browser() {
  return (
    <div>
        <NavBar />
        <Main />
        <Footer />
    </div>
  );
}

export default Browser;

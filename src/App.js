import React from 'react';
import './App.css';
import NavBar from "./container/NavBar";
import Footer from "./components/Footer";
import Main from "./container/Main";

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

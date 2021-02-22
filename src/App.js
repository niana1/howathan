import './App.css';
import Navigation from './Navbar';
import React, { useState } from "react";
import ReactRoundedImage from "react-rounded-image";

function App() {

  return (
    <div className="app-wrapper">
    <Navigation/> 
      <form class="form-container">
        <h3>Your Rewards</h3>
      <div className="trophy-container">
        <p>
          Trophies Earned: 50 x  <img 
        width="40"
        height="40"
        src="/images/trophy.png"
      ></img>
          </p>
      <p>Trophies Left for this month: 10 x <img 
        width="40"
        height="40"
        src="/images/trophy.png"
      ></img></p>
      </div>
      </form>
      <div class="form-review">
        <h3 style={{paddingLeft:"400px"}}>Recognitions</h3>
      </div>
    </div>
  
  );
}

export default App;


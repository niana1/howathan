
import '../../App.css';
import Navigation from '../../Navbar';
import React, { useState } from "react";
import { Button } from 'bootstrap';
// import ReactRoundedImage from "react-rounded-image";
// import { Navbar } from 'react-bootstrap';
// import GenerateTableOfMeetings from '../../GenerateTable';
// import LeaderBoard from './GenerateTable';
// import {Dropdown,DropdownButton} from 'react-bootstrap';

function Profile({email,backFunction}) {
   let  backButtonClicked=()=>{
       console.log(email)
       console.log(typeof(backFunction))
        backFunction();
    }

  return (
    <div className="app-wrapper">
    {/* <Navigation/> 
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
        <div className="recognition-container">
        citation 1
      </div>
      <div className="recognition-container">
        citation 2
      </div>
      </div> */}

      {/* <Button onClick={backButtonClicked}>ClickToGoBack</Button> */}
      <button onClick={backButtonClicked}>Go back to Screen1!</button>
    </div>
//     <div className="fill-window">
//       <div>
//     <Navigation/>
//     </div>
//     <div style={{paddingTop:"120px"}}>
// <DropdownButton id="dropdown-basic-button" title="Time-Period">
//   <Dropdown.Item href="#/action-1">3 Months </Dropdown.Item>
//   <Dropdown.Item href="#/action-2">6 Months</Dropdown.Item>
//   <Dropdown.Item href="#/action-3">1 Year</Dropdown.Item>
// </DropdownButton>
//     </div>
//     <div style={{paddingTop:"50px"}}>
//     <LeaderBoard/>
//     </div>
//   </div>
  );
}

export default Profile;





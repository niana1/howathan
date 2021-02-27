import './App.css';
import Navigation from './Navbar';
import FilterBar from './filterbar';
import React, { useState } from "react";
import ReactRoundedImage from "react-rounded-image";
import LeaderBoard from './componets/LeaderBoard';
import Filter from './componets/filter';
import filterlogo from './filterlogo.svg';
import { Dropdown } from 'semantic-ui-react'

function App() {
 
  const onSelect=(e)=>{
     console.log(e);
     if(e=="Learning Mindset"){
    var res=response.filter(e1=>e1.type=="learning mindset");
    setResponse(res);}
    if(e=="Engaging with Openness"){
    var res=response.filter(e1=>e1.type=="Engaging with Openness");
    setResponse(res);}
    if(e=="Inclusive Collaboration"){
    var res=response.filter(e1=>e1.type=="Inclusive Collaboration");
    setResponse(res);}
    if(e=="Partnering for Client Impact"){
    var res=response.filter(e1=>e1.type=="client impact");
    setResponse(res);}
    if(e=="Embracing the Future"){
    var res=response.filter(e1=>e1.type=="Embracing the Future");
    setResponse(res);}
    //   if(e="opt-1"){
  //    var responseFiltered=[{
  //     "id": "60392bb6a968fe2acaee0aa9",
  //     "name": "Akhil",
  //     "email": "napa.manoj@publicisgroupe.net",
  //     "citationType": "c",
  //     "points": 0,
  //     "timestamp": "2021-02-26T17:11:18.363+00:00",
  //     "type": "learning mindset"
  // }]
 
       }
      
    
  

  const [response,setResponse]=useState(
    [  {
      "id": "60392bb6a968fe2acaee0aa9",
      "name": "Akhil",
      "email": "napa.manoj@publicisgroupe.net",
      "citationType": "c",
      "points": 0,
      "timestamp": "2021-02-26T17:11:18.363+00:00",
      "type": "learning mindset"
  },
  {
      "id": "60392c5ba968fe2acaee0aac",
      "name": "sai",
      "email": "napa.manoj@publicisgroupe.net",
      "citationType": "p",
      "points": 8,
      "timestamp": "2021-02-26T17:14:03.955+00:00",
      "type": "client impact"
  }
])

  return (

    <div>
    <div>
      <Navigation ></Navigation>
    </div>
  <div style={{paddingTop:"100px"}}>
    <FilterBar handleSelect={onSelect}></FilterBar>
  </div>
   
    <div style={{paddingTop:"50px"}}>
      <LeaderBoard response={response}></LeaderBoard>
    </div>
    </div>
    
    // <div className="app-wrapper">
    // <Navigation/> 
    //   <form class="form-container">
    //     <h3>Your Rewards</h3>
    //   <div className="trophy-container">
    //     <p>
    //       Trophies Earned: 50 x  <img 
    //     width="40"
    //     height="40"
    //     src="/images/trophy.png"
    //   ></img>
    //       </p>
    //   <p>Trophies Left for this month: 10 x <img 
    //     width="40"
    //     height="40"
    //     src="/images/trophy.png"
    //   ></img></p>
    //   </div>
    //   </form>
    //   <div class="form-review">
    //     <h3 style={{paddingLeft:"400px"}}>Recognitions</h3>
    //   </div>
    // </div>
  
  );
}

export default App;


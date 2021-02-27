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
 
  const onSelectCategory=(e)=>{
   
    if(e=="Learning Mindset") {
      var res=result.filter(e1=>  e1.type==="learning mindset");
      setResponse(res);    
    }

    else if(e=="Engaging with Openness") {
      var res=result.filter(e1=>e1.type==="Engaging with Openness");
      setResponse(res);
    }

    else if(e=="Inclusive Collaboration") {
      var res=result.filter(e1=>e1.type==="Inclusive Collaboration");
      setResponse(res);
    }

    else if(e=="Partnering for Client Impact") {
      var res=result.filter(e1=>e1.type==="Partnering for Client Impact");
      setResponse(res);
    }

    else{
      var res=result.filter(e1=>e1.type==="Embracing the Future");
      setResponse(res);
    }
   }
  const onSelectDate=(e)=>{
    const currentDate = new Date();
    const currentMonth=currentDate.getMonth();
    const currentYear=currentDate.getYear();
   // console.log(currentMonth);
    if(e==="Current Month") {
      for(var i=0;i<data.length;i++) {
        var responseDate = new Date(data[i].timestamp);
        var responseMonth = responseDate.getMonth();
        if(currentMonth===responseMonth) {
         var res1=data.filter(e2=> new Date(e2.timestamp).getMonth()===responseMonth);
         console.log(responseMonth);  
         setResponse(res1);
        }
      }
    }
    else {
      for(var i=0;i<data.length;i++) {
        var responseDate = new Date(data[i].timestamp);
        var responseYear = responseDate.getYear();
        if(currentYear===responseYear) {
         var res1=data.filter(e2=> new Date(e2.timestamp).getYear()===responseYear);
         console.log(responseYear);  
         setResponse(res1);
        }
      }
     }
   }
   const data=[  { 
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "p",
    "points": 1,
    "timestamp": "2021-02-26T17:11:18.363+00:00",
    "type": "learning mindset"
},
{
  "id": "60392bb6a968fe2acaee0aa9",
  "name": "Akhil",
  "email": "akhil.reddy@publicisgroupe.net",
  "citationType": "c",
  "points": 3,
  "timestamp": "2021-02-26T17:11:18.363+00:00",
  "type": "learning mindset"
},
{
  "id": "60392bb6a968fe2acaee0aa9",
  "name": "Akhil",
  "email": "akhil.reddy@publicisgroupe.net",
  "citationType": "c",
  "points": 2,
  "timestamp": "2021-04-26T17:11:18.363+00:00",
  "type": "learning mindset"
},
{
    "id": "60392c5ba968fe2acaee0aac",
    "name": "sai",
    "email": "napa.manoj@publicisgroupe.net",
    "citationType": "p",
    "points": 8,
    "timestamp": "2021-03-26T17:14:03.955+00:00",
    "type": "client impact"
}
];

  const [response,setResponse]=useState(
    [   { 
      "id": "60392bb6a968fe2acaee0aa9",
      "name": "Akhil",
      "email": "akhil.reddy@publicisgroupe.net",
      "citationType": "p",
      "points": 1,
      "timestamp": "2021-02-26T17:11:18.363+00:00",
      "type": "learning mindset"
  },
  {
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "c",
    "points": 3,
    "timestamp": "2021-02-26T17:11:18.363+00:00",
    "type": "learning mindset"
  },
  {
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "c",
    "points": 2,
    "timestamp": "2021-04-26T17:11:18.363+00:00",
    "type": "learning mindset"
  },
  {
      "id": "60392c5ba968fe2acaee0aac",
      "name": "sai",
      "email": "napa.manoj@publicisgroupe.net",
      "citationType": "p",
      "points": 8,
      "timestamp": "2021-03-26T17:14:03.955+00:00",
      "type": "client impact"
  }
])
var result = [];
data.reduce(function(res, value) {

  if (!res[value.email]) {
    res[value.email] = { email: value.email, points: 0,type:value.type,name:value.name };
    result.push(res[value.email])
  }

  res[value.email].points += value.points;
  return res;
}, {});

console.log("this is result",result);


  return (

    <div>
    <div>
      <Navigation ></Navigation>
    </div>
  <div style={{paddingTop:"100px"}}>
    <FilterBar handleSelectCategory={onSelectCategory} handleSelectDate={onSelectDate}></FilterBar>
  </div>
   
    <div style={{paddingTop:"50px"}}>
      <LeaderBoard response={response}></LeaderBoard>
    </div>
    </div>
    
  
  );
}

export default App;


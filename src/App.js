import './App.css';
import Navigation from './Navbar';
import FilterBar from './filterbar';

import React, { useEffect, useState } from 'react';
import ReactRoundedImage from "react-rounded-image";
import LeaderBoard from './componets/LeaderBoard';
import Filter from './componets/filter';
import filterlogo from './filterlogo.svg';
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';
function App({data}) {

  const [apidata,changeApiData]=useState({data:[...data]});
  
 
 
  const [array1,setArray]=useState({array:["",""]})
  
  const array=array1.array

 console.log("came here ------>>>")
 
 
 const filtering=(array)=>{
  var result = [];
    data.reduce(function(res, value) { 
    if (!res[value.email+value.type] ) {
      res[value.email+value.type] = { email: value.email, points: 0,citations:0,type:value.type,name:value.name,timestamp:value.timestamp};  
      result.push(res[value.email+value.type])
      
    }
    if(value.citationType=="c")
    {
    res[value.email+value.type].citations += 1;
    }
    else{
    res[value.email+value.type].points += value.points;
    } 
    return res;
  }, {});
  console.log("this is result",result);
  

  var copy=[...result];
  
  if(array[0]===""){

  }
  else{
    var copy1=[...copy]
    var e=array[0]
    if(e=="Learning Mindset") {
      copy=copy.filter(e1=>  e1.type==="Learning Mindset");
      //setResponse(res);    
    }

    else if(e=="Engaging with Openness") {
      copy=copy.filter(e1=>e1.type==="Engaging with Openness");
    //  setResponse(res);
    }

    else if(e=="Inclusive Collaboration") {
      copy=copy.filter(e1=>e1.type==="Inclusive Collaboration");
      //setResponse(res);
    }

    else if(e=="Partnering for Client Impact") {
      copy=copy.filter(e1=>e1.type==="Partnering for Client Impact");
     // setResponse(res);
    }

    else if(e==="Embracing the Future"){
      copy=copy.filter(e1=>e1.type==="Embracing the Future");
      //setResponse(res);
    }
    else {
      copy=copy.filter(e1=>e1.type==="Recognition");
    }

  }

  if(array[1]===""){

  }
  else{
    var e=array[1]
    const currentDate = new Date();
    const currentMonth=currentDate.getMonth();
    const currentYear=currentDate.getYear();
   // console.log(currentMonth);
    if(e==="Current Month") {
      for(var i=0;i<copy.length;i++) {
        var responseDate = new Date(copy[i].timestamp);
        var responseMonth = responseDate.getMonth();
        if(currentMonth===responseMonth) {
         copy=copy.filter(e2=> new Date(e2.timestamp).getMonth()===responseMonth);
         console.log('HI......................',responseMonth);  
         //setResponse(res1);
        }
        else {
         copy="";
        }
      }
    }
    else {  
      for(var i=0;i<copy.length;i++) {
        var responseDate = new Date(copy[i].timestamp);
        var responseYear = responseDate.getYear();
        if(currentYear===responseYear) {
         copy=copy.filter(e2=> new Date(e2.timestamp).getYear()===responseYear);
         console.log(responseYear);  
         //setResponse(res1);
        }
      }
     }
  }
//setResponse(copy)
changeApiData({data:[...copy]})
 }

  const onSelectCategory=(e)=>{
   
    if(e==="By Category"){
      array[0]="";
      
    }
    else{
      array[0]=e;
    }
    console.log(array)
    filtering(array)
    console.log(array)
    setArray({array:array})
   }
  const onSelectDate=(e)=>{
    console.log("------------///")
    console.log(array)
    console.log("------------------////")
    if(e==="By Time"){
      array[1]="";
    }
    else{
      array[1]=e;
    }
    filtering(array)
    setArray({array:array})
   }
   
   


  const [response,setResponse]=useState(
    [   { 
      "id": "60392bb6a968fe2acaee0aa9",
      "name": "Akhil",
      "email": "akhil.reddy@publicisgroupe.net",
      "citationType": "p",
      "points": 1,
      "timestamp": "2021-02-26T17:11:18.363+00:00",
      "type": "Learning Mindset"
  },
  {
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "p",
    "points": 3,
    "timestamp": "2021-02-26T17:11:18.363+00:00",
    "type": "Learning Mindset"
  },
  {
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "c",
    "points": 0,
    "timestamp": "2021-04-26T17:11:18.363+00:00",
    "type": "Learning Mindset"
  },
  {
      "id": "60392c5ba968fe2acaee0aac",
      "name": "sai",
      "email": "napa.manoj@publicisgroupe.net",
      "citationType": "p",
      "points": 12,
      "timestamp": "2021-03-26T17:14:03.955+00:00",
      "type": "Partnering for Client Impact"
  },
  {
    "id": "60392bb6a968fe2acaee0aa9",
    "name": "Akhil",
    "email": "akhil.reddy@publicisgroupe.net",
    "citationType": "c",
    "points": 0,
    "timestamp": "2021-02-26T17:11:18.363+00:00",
    "type": "Learning Mindset"
  }
])



  return (

    <div>
    <div>
      <Navigation ></Navigation>
    </div>
  <div style={{paddingTop:"100px"}}>
    <FilterBar handleSelectCategory={onSelectCategory} handleSelectDate={onSelectDate}></FilterBar>
  </div>
   
    <div style={{paddingTop:"50px"}}>
      <LeaderBoard response={apidata.data}></LeaderBoard> 
    </div>
    </div>
    
  
  );
}

export default App;


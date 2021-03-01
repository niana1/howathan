import '../../App.css';
import Navigation from '../../Navbar';
import React, { useState } from "react";
import { Button } from 'bootstrap';
import '../profile/index.css';
import SingleCitation from './singlecitation';
import axios from 'axios';
import PointsSection from './pointsSection';
import {Table} from "react-bootstrap";
// import ReactRoundedImage from "react-rounded-image";
// import { Navbar } from 'react-bootstrap';
// import GenerateTableOfMeetings from '../../GenerateTable';
// import LeaderBoard from './GenerateTable';
// import {Dropdown,DropdownButton} from 'react-bootstrap';

function Profile({email,backFunction}) {


  const[apiData,changeApiData]=useState({data:[]})
 const[callDone,changeCall]=useState(false)
 var msg=""
  console.log("--------")
  console.log(callDone)
  console.log(apiData.data)
 console.log("----------")

if(apiData.data.length==0){
  axios.get("https://71fd16820ca7.ngrok.io/getCitationByEmail?email="+email).then((res)=>{
    console.log('Screen2data',res.data); 
   changeApiData({data:[...res.data]})
  // changeCall(true)
  })
  .catch((err)=>{
    msg="some error encountered try later"
  })
}
  

  if(apiData.data.length==0){
    if(msg===""){
      return(<h1>Loading please wait</h1>)
    }
    else{
      return(<h1>{msg}</h1>)
    }
  }
  else{
    return(<ProfileChild 
      backFunction={backFunction}
      apiData={apiData.data}
      />)
  }


     
}

export default Profile;



function ProfileChild({backFunction,apiData}){

  let  backButtonClicked=()=>{
    console.log(typeof(backFunction))
     backFunction();
 }



 // const data = [{​​​​​​​​​​​​​
 //         "_id" : "6039f69744b2e93592c43479",
 //         "from" : "Tamatam Reddy",
 //         "to" : "Napa Manoj",
 //         "citation" : "i worked with sai",
 //         "fromEmail" : "tamreddy1@publicisgroupe.net",
 //         "toEmail" : "napa.manoj@publicisgroupe.net",
 //         "timestamp" : "2021-02-27T07:36:55.815Z",
 //         "points" : 0,
 //         "type" : "Inclusive Collaboration",
 //         "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
 //            }​​​​​​​​​​​​​,
 //            {​​​​​​​​​​​​​
 //         "_id" : "6039f69a44b2e93592c4347a",
 //         "from" : "Napa Manoj",
 //         "to" : "Tamatam Reddy",
 //         "fromEmail" : "napa.manoj@publicissapient.com",
 //         "toEmail" : "tamreddy1@publicisgroupe.net",
 //         "timestamp" : "2021-02-27T07:36:58.676Z",
 //         "points" : 10,
 //         "type" : "Engaging with Openness",
 //         "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
 // }​​​​​​​​​​​​​];

 var data=[  {
   "_id" : "6039f69744b2e93592c43479",
   "from" : "Tamatam Reddy",
   "to" : "Napa Manoj",
   "citation" : "i worked with sai",
   "fromEmail" : "tamreddy1@publicisgroupe.net",
   "toEmail" : "napa.manoj@publicisgroupe.net",
   "timestamp" : "2021-02-27T07:36:55.815Z",
   "points" : 0,
   "type" : "Inclusive Collaboration",
   "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
 },
 {
   "_id" : "6039f69744b2e93592c43479",
   "from" : "Tamatam Reddy",
   "to" : "Napa Manoj",
   "citation" : "i have worked with sai",
   "fromEmail" : "napa.manoj@publicissapient.com",
   "toEmail" : "akhilreddy@gmail.comm",
   "timestamp" : "2021-02-27T07:36:55.815Z",
   "points" : 0,
   "type" : "Inclusive Collaboration",
   "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
 },
 {
   "_id" : "6039f69a44b2e93592c4347a",
   "from" : "Napa Manoj",
   "to" : "Tamatam Reddy",
   "fromEmail" : "napa.manoj@publicissapient.com",
   "toEmail" : "tamreddy1@publicisgroupe.net",
   "timestamp" : "2021-02-27T07:36:58.676Z",
   "points" : 10,
   "type" : "Engaging with Openness",
   "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
 }
 ];
 data=[...apiData]
var rows=[];
var pointsarray=[];
 const RecognitionResult=()=>{
   for(var i=0;i<data.length;i++){
     if(data[i].points==0){
       console.log("inside recognition result",data[i].toEmail);
       rows.push(
     //     <tr className="citation-wrapper">
     //    <td className="cell-wrapper"> {data[i].citation}  </td>
     //       <td className="cell-wrapper">{data[i].type}</td>
     //       <td className="cell-wrapper">{data[i].from}</td>
     // </tr>);
     <SingleCitation key={i} data={data[i]} />)
     }
     if(data[i].points!==0){
       console.log("points:",data[i].points);
       pointsarray.push(
         <PointsSection key={i} data={data[i]}/>
       )
     }
   
   }

 }

return (
 <div className="app-wrapper">
 <Navigation/> 
   <form className="form-container">
     <h3 style={{paddingLeft:"60px"}}>Your Ponits</h3>
   <div >
   {RecognitionResult()}
        <div>{pointsarray}</div>

     {/* <div>{pointsarray}</div> */}
     {/* <p>
       Trophies Earned: 50 x  <img 
     width="40"
     height="40"
     src="/images/trophy.png"
   ></img>
       </p> */}
   </div>
   <div style={{paddingTop:"30px"}}>
   <button onClick={backButtonClicked}>Go back to Screen1!</button>
   </div>
   </form>
   <div className="form-review">
     <h3 style={{paddingLeft:"400px"}}>Recognitions</h3>
     <div>
     <div>{rows}</div>
   </div>
   {/* <div className="recognition-container">
     citation 2
   </div> */}
   </div>
 </div>
 // <div className="fill-window">
 //   <div>
 // <Navigation/>
 // </div>
 // </div>
 /* <div style={{paddingTop:"120px"}}> */
/* <DropdownButton id="dropdown-basic-button" title="Time-Period">
<Dropdown.Item href="#/action-1">3 Months </Dropdown.Item>
<Dropdown.Item href="#/action-2">6 Months</Dropdown.Item>
<Dropdown.Item href="#/action-3">1 Year</Dropdown.Item>
</DropdownButton>
 </div>
 <div style={{paddingTop:"50px"}}>
 <LeaderBoard/>
 </div>
</div> */
);

}
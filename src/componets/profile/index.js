
import '../../App.css';
import Navigation from '../../Navbar';
import React, { useState } from "react";

function Profile({email,backFunction}) {
  var cit;
  const recognitionData=[{
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
  "citation" : "He is very good",
  "fromEmail" : "tamreddy1@publicisgroupe.net",
  "toEmail" : "napa.manoj@publicisgroupe.net",
  "timestamp" : "2021-02-27T07:36:55.815Z",
  "points" : 0,
  "type" : "Inclusive Collaboration",
  "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
},
{
      "_id" :"6039f69a44b2e93592c4347a",
      "from" : "Napa Manoj",
      "to" : "Tamatam Reddy",
      "fromEmail" : "napa.manoj@publicisgroupe.net",
      "toEmail" : "tamreddy1@publicisgroupe.net",
      "timestamp" : "2021-02-27T07:36:58.676Z",
      "points" : 10,
      "type" : "Engaging with Openness",
      "_class" : "com.sapient.teamsApi.DataDocuments.CitationCollection"
}];
   let  backButtonClicked=()=>{
       console.log(email)
       console.log(typeof(backFunction))
        backFunction();
    }
    var resultsec = [];
    
      
    recognitionData.reduce(function(res, value) { 
      if (!res[value.toEmail] ) {
        res[value.toEmail] = { toEmail: value.toEmail,allcitations:[],toname:value.to};  
        resultsec.push(res[value.toEmail]);
      }
      if(value.points===0)
        {
        res[value.toEmail].allcitations.push( value.type+"-"+value.citation+"-"+value.from);
  
        }
      return res;
      }, {});
     console.log("this is secresult",resultsec);
     const citations =() =>{
       console.log('Email',resultsec[0].toEmail)
       console.log('Check',email===resultsec[0].toEmail);
       console.log('Citations',resultsec[0].allcitations);
       for(var j=0;j<resultsec.length;j++) {
         if(resultsec[j].toEmail===email) {
          console.log('Here',resultsec[j].allcitations);
          splitCitations(resultsec[j].allcitations);
          cit =resultsec[j].allcitations;
          return cit;
         }
       }    
    }
    const splitCitations =(nonsplittedCitations) => {
      console.log('Inside splitCitations',nonsplittedCitations);
      // var splittedCitations=nonsplittedCitations.split('-');

    }
  //  const citations =()=>{
  //     console.log('Inside citations');
  //     console.log('Email',{email});
  //     for(var i=0;i<recognitionData.length;i++) {
  //       console.log('Hi bro....................',recognitionData[i].citation);
  //       if(recognitionData[i].points===0) {
  //         console.log('Hi bro with citations....................',recognitionData[i].citation + "   "+recognitionData[i].toEmail);
  //         console.log('RecEmail',{email});
  //         console.log('Condition',{email}===(recognitionData[i].toEmail));
  //         console.log('Hi bro inside email checking....................',recognitionData[i].citation);
          
  //       }
      
  //     }
  //   }
  return (
    <div className="app-wrapper">
       <Navigation/> 
       <form class="form-container">
        <h3>Your Rewards</h3>
        <div className="trophy-container" >
        <p>
          Trophies Earned: 50 x 
          <img 
          width="40"
          height="40"
          src="/images/trophy.png"
          ></img>
        </p>
       
       </div>
       <div style={{padding:'20px'}}>
          <button onClick={backButtonClicked} >Go back to Screen1!</button>
       </div>
      </form>
      <div class="form-review">
        <h3 style={{paddingLeft:"400px"}}>Recognitions</h3>
        <div className="recognition-container"> 
          
          {citations()}
        </div>
    
     </div>

    
    <div className="fill-window">
      <div>
        <Navigation/>
      </div>
  </div>
  </div>
  );
}

export default Profile;





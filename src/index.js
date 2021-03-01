import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
var  func1=()=>{
  console.log("in funcccc")
   axios.get(`https://8d38df85a25d.ngrok.io/getFilter`).then((res)=>{
     console.log("--------")
     console.log(res.data)
     ReactDOM.render(
      <App data={res.data}/>,
    document.getElementById('root')
  );
    // changeApiData({data:[...res.data]})
   }).catch((e)=>{
       console.log("error in api")
       ReactDOM.render(
        <h1>Error While Loading....</h1> ,
      document.getElementById('root')
    );
   })
 }
 func1();
 ReactDOM.render(
  <h1>Loading....</h1>,
document.getElementById('root')
);

// const data=[  {
//   "id": "60392bb6a968fe2acaee0aa9",
//   "name": "sai",
//   "email": "napa.manoj@publicisgroupe.net",
//   "citationType": "c",
//   "points": 0,
//   "timestamp": "2021-02-26T17:11:18.363+00:00",
//   "type": "learning mindset"
// },
// {
//   "id": "60392c5ba968fe2acaee0aac",
//   "name": "akhil",
//   "email": "akhil@gmail.com",
//   "citationType": "p",
//   "points": 20,
//   "timestamp": "2021-02-26T17:14:03.955+00:00",
//   "type": "client impact"
// },
// {
//   "id": "60392c5ba968fe2acaee0aac",
//   "name": "sai",
//   "email": "napa.manoj@publicisgroupe.net",
//   "citationType": "p",
//   "points": 15,
//   "timestamp": "2021-02-26T17:14:03.955+00:00",
//   "type": "client impact"
// },
// {
//   "id": "60392c5ba968fe2acaee0aac",
//   "name": "riya",
//   "email": "riya@publicisgroupe.net",
//   "citationType": "p",
//   "points": 30,
//   "timestamp": "2021-02-26T17:14:03.955+00:00",
//   "type": "client impact"
// },
// {
//   "id": "60392c5ba968fe2acaee0aac",
//   "name": "suchi",
//   "email": "suchi@publicisgroupe.net",
//   "citationType": "p",
//   "points": 30,
//   "timestamp": "2021-02-26T17:14:03.955+00:00",
//   "type": "client impact"
// },
// {
//   "id": "60392c5ba968fe2acaee0aac",
//   "name": "suchi",
//   "email": "suchi@publicisgroupe.net",
//   "citationType": "c",
//   "points": 0,
//   "timestamp": "2021-02-26T17:14:03.955+00:00",
//   "type": "client impact"
// }
// ];
//  ReactDOM.render(
//   <App data={data}/>,
// document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
var  func1=()=>{
  console.log("in funcccc")
   axios.get(`https://f4d363204490.ngrok.io/getFilter`).then((res)=>{
     console.log("--------")
     console.log(res.data)
     ReactDOM.render(
      <App data={res.data}/>,
    document.getElementById('root')
  );
    // changeApiData({data:[...res.data]})
   }).catch((e)=>{
       console.log("dell")
   })
 }
 func1();
 ReactDOM.render(
  <h1>Loading please wait</h1>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

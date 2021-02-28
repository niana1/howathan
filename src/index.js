import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
var  func1=()=>{
  console.log("in funcccc");
  const data=
    [  {
      "id": "60392bb6a968fe2acaee0aa9",
      "name": "sai",
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
];
//    axios.get(`https://f4d363204490.ngrok.io/getFilter`).then((res)=>{
//      console.log("--------")
//      console.log(data)
//      ReactDOM.render(
//       <App data={data}/>,
//     document.getElementById('root')
//   );
//     // changeApiData({data:[...res.data]})
//    }).catch((e)=>{
//        console.log("dell")
//    })
//  }
 console.log(data);
 ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
);
}
 func1();

reportWebVitals();

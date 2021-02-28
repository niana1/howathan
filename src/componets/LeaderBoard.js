import React,{ useState} from "react";
import {Table} from "react-bootstrap";

export default function LeaderBoard({response,changeScreenfunction}) {
  var data=[...response]

var onClickHandler =(email)=>{
  console.log(email,"------------------>>>>")
  changeScreenfunction(email)
}


  const rows=[];
  for (var i=0;i<response.length;i++){
    
    console.log(response[i])
  rows.push(
    <RowData 
    key={i}
    row={response[i]}
    onClickHandler={onClickHandler}
    index={i}
    />
      );
  }
   
  

  return (
    <Table 
    responsive striped bordered hover variant="light">
        <thead >
          <tr>
            <th>Name</th>
            <th>No. of Citations</th>
            <th>No. of points</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
  );
}


function RowData({row,onClickHandler,index}){

  var onClickHandlerFunction =()=> {
    onClickHandler(row.email)
  }
  return(<tr key={index} onClick={onClickHandlerFunction}>
     <td> {row.name}  </td>
        <td>{row.citations}</td>
        <td>{row.points}</td>
  </tr>);
}
/*
<tr key={i} email={response[i].email} onClick={(e)=>{
   
 
    return onClickHandler("kkk")}}>
        <td> {response[i].name}  </td>
        <td>{response[i].citations}</td>
        <td>{response[i].points}</td>
      </tr>
*/
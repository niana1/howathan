import React,{ useState} from "react";
import {Table} from "react-bootstrap";

export default function LeaderBoard({response,changeScreenfunction}) {
  var data=[...response]

var onClickHandler =(email,totalPoints)=>{
  console.log(email,"------------------>>>>"+totalPoints)
  changeScreenfunction(email,totalPoints)
}


  const rows=[];
  response.sort((citation1, citation2) => {
        if (citation1.points == citation2.points) {
          console.log(citation1.citations,citation2.citations);
          if(citation1.citations > citation2.citations){
            console.log('in sorting citations');
          return -1;
        }
        else
        return 1;
        }
        if (citation1.points > citation2.points) {
          return -1;
        }
      }
  );

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
    <div style={{padding:"0px 50px 0px 50px" }}>
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
      </div>
  );
}


function RowData({row,onClickHandler,index}){

  var onClickHandlerFunction =()=> {
    onClickHandler(row.email,row.points)
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
import React,{ useState} from "react";
import {Table} from "react-bootstrap";

export default function LeaderBoard({response}) {
  




  const rows=[];
  for (var i=0;i<response.length;i++){
  rows.push(<tr>
        <td>{response[i].name}</td>
        <td>{response[i].citationType}</td>
        <td>{response[i].points}</td>
      </tr>
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

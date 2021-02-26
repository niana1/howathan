import React from "react";
import {Table} from "react-bootstrap";

export default function LeaderBoard() {
  const rows=[];

  rows.push(<tr>
        <td>arun</td>
        <td>5</td>
        <td>6</td>
      </tr>
      
      );
      rows.push(<tr>
        <td>arun1</td>
        <td>5</td>
        <td>6</td>
      </tr>
      
      );
      rows.push(<tr>
        <td>arunr</td>
        <td>5</td>
        <td>6</td>
      </tr>
      
      );
  

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


import React, { useState } from "react";
import {Table,Dropdown} from "react-bootstrap";
import {
 Navbar,
 Nav,
 Button
} from "react-bootstrap";
import {Form,FormControl} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import ReactRoundedImage from "react-rounded-image";
 
const FilterBar = () => {
  
 
 return (
    <>
    <Table 
    responsive striped bordered hover variant="light">
        <thead >
          <tr>
            <th><h6 style=
             { {
                 paddingLeft:'20px',
                 paddingRight:'40px'}}>
               Leader Board
          </h6></th>
            <th>
            <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown-basic">
           Category
          </Dropdown.Toggle>

           <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Learning Mindset</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Engaging with Openness</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Inclusive Collaboration</Dropdown.Item>
           <Dropdown.Item href="#/action-1">Partnering for Client Impact</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Embracing the Future</Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>

            </th>
            <th>
            <Dropdown>
           <Dropdown.Toggle variant="success" id="dropdown-basic">
            Period
          </Dropdown.Toggle>

           <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
           <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </Dropdown.Menu>
             </Dropdown>

            </th>
          </tr>
        </thead>
       
      </Table>
  </>
 );
};
export default FilterBar;
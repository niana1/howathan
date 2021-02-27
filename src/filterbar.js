
import React, { useState } from "react";
import {Table,Dropdown,DropdownButton} from "react-bootstrap";
import {
 Navbar,
 Nav,
 Button
} from "react-bootstrap";
import {Form,FormControl} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import ReactRoundedImage from "react-rounded-image";
 
const FilterBar = (props) => {
    const [selectedCategory, setSelectedCategory]=useState("By Category");
    const [selectedTime, setSelectedTime]=useState("By Time");
    const handleselectorCategory=(e)=>{
       {handleSelect2(e)}
       {props.handleSelectCategory(e)}
    }
    const handleSelectorDate=(e) =>{
      {handleSelect3(e)}
      {props.handleSelectDate(e)}
    }
    const handleSelect2=(e)=>{
      setSelectedCategory(e)
    }
    const handleSelect3=(e)=>{
      setSelectedTime(e)
    }
 
 return (
    <>
      <DropdownButton
      alignRight
      title={selectedCategory}
      id="dropdown-menu-align-right"
      onSelect={handleselectorCategory}
      >
              <Dropdown.Item eventKey="Learning Mindset">Learning Mindset</Dropdown.Item>
              <Dropdown.Item eventKey="Engaging with Openness">Engaging with Openness</Dropdown.Item>
              <Dropdown.Item eventKey="Inclusive Collaboration">Inclusive Collaboration</Dropdown.Item>
              <Dropdown.Item eventKey="Partnering for Client Impact">Partnering for Client Impact</Dropdown.Item>
              <Dropdown.Item eventKey="Embracing the Future">Embracing the Future</Dropdown.Item>
             </DropdownButton>

             <DropdownButton
      alignRight
      title={selectedTime}
      id="dropdown-menu-align-right"
      onSelect={handleSelectorDate}
    
        >
              {/* <Dropdown.Item eventKey="3 Months">3 Months</Dropdown.Item>
              <Dropdown.Item eventKey="6 Months">6 Months</Dropdown.Item> */}
              <Dropdown.Item eventKey="Current Month">Current Month</Dropdown.Item>
              <Dropdown.Item eventKey="Current Year">Current Year</Dropdown.Item>
             </DropdownButton>
             
            {/* <Dropdown>
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
             </Dropdown> */}

  </>
 );
};
export default FilterBar;
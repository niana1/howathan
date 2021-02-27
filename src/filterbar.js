
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
    <div className="dropdown-bar" style={{display:'flex',justifyContent:'space-between',padding:'0 50px'}}>
      <h1 >LeaderBoard</h1>
      <div style={{display:'flex'}}>
      <DropdownButton
      alignRight
      style={{paddingRight:'50px'}}
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
             
             </div>

  </div>
 );
};
export default FilterBar;
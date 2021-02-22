import React, { useState } from "react";
import {
 Navbar,
 Nav,
 Button
} from "react-bootstrap";
import {Form,FormControl} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import ReactRoundedImage from "react-rounded-image";
 
const Navigation = () => {
  
 
 return (
     <>
  <Navbar bg="light" variant="light" fixed="top">
  <Navbar.Brand href="#home"><div>
      <img
        width="90"
        height="50"
        src="/images/sapient_image.png"
        className="d-inline-block align-top"
      /></div>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Navbar.Text  ><h6 style=
             { {
                 paddingLeft:'20px',
                 paddingRight:'40px'}}>
               Reward &<br></br> Recognitions
          </h6> </Navbar.Text>
      <Nav.Link href="#LeaderBoard"><div><h6 style=
             { {
              paddingLeft:'50px',
              paddingRight:'50px'}}>
                 <ion-icon name="bar-chart-sharp"></ion-icon><br></br>LeaderBoard
          </h6> </div></Nav.Link>
      <i class="far fa-user"></i>
      
      <Nav.Link href="#profile"><h6 style=
             { {
              paddingLeft:'60px',
              paddingRight:'50px'}}><ion-icon name="person-sharp"></ion-icon><br></br>Profile
          </h6></Nav.Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Employee" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form>
    <Nav.Link href="#picture"> <ReactRoundedImage image="/images/profile_pic2.jpeg"  roundedColor="#321124" roundedSize="1" imageWidth="50" imageHeight="50"/></Nav.Link>
  </Navbar>
   </>
 );
};
export default Navigation;
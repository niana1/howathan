import React, { useState } from "react";
import {
 Navbar,
 Nav,
 Button
} from "react-bootstrap";
import {Form,FormControl} from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
 
const Navigation = () => {
 
 return (
     <>
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Publicis <br></br><font size="4"
          face="verdana"
          color="red"> 
            Sapient 
        </font> </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" ><h6 style=
             { {
                 paddingLeft:'40px',
                 paddingRight:'40px'}}>
               Rewards &<br></br> Recognitions
          </h6> </Nav.Link>
      <Nav.Link href="#features"> <h6 style=
             { {
              paddingLeft:'40px',
              paddingRight:'40px'}}>
               <ion-icon name="bar-chart-sharp"></ion-icon><br></br> LeaderBoard
          </h6> </Nav.Link>
      <i class="far fa-user"></i>
      
      <Nav.Link href="#profile"><h6 style=
             { {
              paddingLeft:'40px',
              paddingRight:'40px'}}><ion-icon name="person-sharp"></ion-icon><br></br>Profile
          </h6></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search Employee" className="mr-sm-2" />
      <Button variant="dark">Search</Button>
    </Form>
  </Navbar>
   </>
 );
};
export default Navigation;
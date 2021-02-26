import React from "react";
import {Table} from "react-bootstrap";
import { Dropdown } from 'semantic-ui-react'


export default function Filter ()  {
    const friendOptions = [
        {
          key: 'Jenny Hess',
          text: 'Jenny Hess',
          value: 'Jenny Hess',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg' },
        },
        {
          key: 'Elliot Fu',
          text: 'Elliot Fu',
          value: 'Elliot Fu',
          image: { avatar: true, src: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg' },
        }
        
      
      ];
      
    return(
        
  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={friendOptions}
  />
    );
}
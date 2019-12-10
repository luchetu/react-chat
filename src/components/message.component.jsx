/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './message.css';
import profile from './images/luchetu.jpg'; 


export const Message=props=> {
  console.log(props.text.Body);
  return (
    
    <div className="container darker">
   
   <img src={profile} alt="profile" />
    <p>{props.text.Body}</p>
    <span className="time-left">11:01</span>
  </div>
    
  );
}


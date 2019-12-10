/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './message.css';
import profile from './images/luchetu.jpg'; 


export const MessageWithVideo=props=> {
   console.log(props.video.MediaUrl0);
  return (
    
    <div className="container darker">
   
   <img src={profile} alt="profile" className="right"/>
   <video width="240" height="160" controls>
  <source src={props.video.MediaUrl0} type="video/mp4"/> 
  </video>
    <span className="time-right">11:01</span>
  </div>
    
  );
}


/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import './message.css';
import profile from './images/luchetu.jpg'; 



export const MessageWithImage=props=> { 
let body=props.picture.Body;
let pic=props.picture.MediaUrl0;
console.log(body);
    return (
    <div className="container darker">
   
   <img src={profile} alt="profile" className="right" />
   <figure>
   <img className="style-img" src={pic}></img>
   <figcaption>{ body!=null? body : ""}</figcaption>
   </figure>
    <span className="time-right">11:01</span>
  </div>
    
  );
}


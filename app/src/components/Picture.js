/* *
  title: Picture.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that receives the picture 
         
 */
import React from 'react';
import profilePic from '../pic/profilePic.png'
import pages from "../css/pages.scss";

const Picture = () => {
  return (<a >
     <img  className="pic" src={profilePic}></img>
  </a>)
}

export default Picture;
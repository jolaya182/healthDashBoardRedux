/* *
  title: Physician.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that handles receiving the Physician's data 
         
 */
import React from 'react';
import pages from "../css/pages.scss";

const Physicians = ({physician_id, physician_name, physician, onHover, hoverOut}) => {
  let phyObj = physician[0];
  return (<div className="row" >
    <div  onMouseEnter={()=>onHover(physician_id)} onMouseLeave={()=>hoverOut(physician_id)}> 
    {" physician name: "}{ physician_name} {", "}
    </div>
    {(physician.length >= 1 && phyObj.physician_id == physician_id ) ?  <div > {" education: "} {phyObj.education}{" years experience: "} {phyObj.years_experience} {" specialty: "} {phyObj.specialty}  </div> : null }
    
    </div>)
}

export default Physicians;
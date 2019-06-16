/* *
  title: ApptDetails.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that handles details of the component
         
 */
import React from 'react';
import pages from "../css/pages.scss";

const ApptDetails = ({setAppointmentView,addAllAppointments,ApptDetails}) => {
  let ad = ApptDetails[0].appointmentDetails[0];
  return(<div className="row">
    <button onClick={()=>{addAllAppointments(ApptDetails[0].patient_id);setAppointmentView()}} >[x]</button>
    <div>Last Appointment: {ad.Last_Appointment}</div>
    <div>Patient Symptoms: {ad.Patient_Symptoms}</div>

  </div>)
}

export default ApptDetails;
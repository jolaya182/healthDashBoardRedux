/* *
  title: ApptDates.js 

  date: 5/28/2019

  author:  javier olaya

  description: component that handles the dates of the appointments 
         
 */
import React from 'react';
import ApptDetails from './ApptDetails';
import Physician from '../containers//Physician';
import pages from "../css/pages.scss";

const AppDates = ({
  appointmentDates,
  getAppointmentDetails,
  addAllAppointments,
  view,
  setAppointmentView,
  setDetailsView }) => {

  return (<div >
    {(view === "GET_APPOINTMENT_VIEW") ? appointmentDates.map((date, index) => {
      let day = new Date(date.start);
      return <div className="row"  key={index} >
          <button onClick={() => { getAppointmentDetails(date.id); setDetailsView() }}>
           {day.getFullYear()}
          -{day.getMonth()}
          -{day.getDate()}
          -{day.getHours()}
          :{day.getMinutes()}
          {", "}
          </button>
        <Physician physician_id={date.physician_id} physician_name={date.physician_name}> </Physician>
        
      </div>
    }) : <ApptDetails setAppointmentView={setAppointmentView} addAllAppointments={addAllAppointments} ApptDetails={appointmentDates}></ApptDetails>
    }
  </div>)
}

export default AppDates;
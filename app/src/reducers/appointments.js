/* *
  title: appointments.js 

  date: 5/28/2019

  author:  javier olaya

  description: reducer that handles all the additions the appoinment state  
         
 */
import {showAppointments, data} from '../actions';

const appointments = (state = data, action) =>{
  switch(action.type){
    case 'ADD_ALL_APPOINTMENTS':
      return data.filter((appointments)=>appointments.patient_id === action.patient_id)
    case 'CLEAR_APPOINTMENT_LIST':
      return action.showAppointments ? data.filter((appointments)=>appointments.patient_id === action.id) : []
    case 'SHOW_APPOINTMENT_DETAILS':
      return  data.filter((appointments)=>appointments.id === action.id);  
      default: 
      return state;
  }
}

export default appointments;
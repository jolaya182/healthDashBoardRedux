/* *
  title: view.js 

  date: 5/28/2019

  author:  javier olaya

  description: handles the current view of the appointments view or the details view  
         
 */
import {getAppointmentView} from '../actions';
const view = (state = getAppointmentView.GET_APPOINTMENT_VIEW, action) =>{
  switch(action.type){
    case "GET_APPOINTMENT_VIEW":
    return getAppointmentView.GET_APPOINTMENT_VIEW
    case "GET_DETAILS_VIEW":
    return getAppointmentView.GET_DETAILS_VIEW
    default:
      return state
  }
}

export default view;
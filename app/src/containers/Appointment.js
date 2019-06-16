/* *
  title: Appointment.js 

  date: 5/28/2019

  author:  javier olaya

  description: redux container that connects the Appointment component  
         
 */
import {connect} from 'react-redux';
import {showAppointmentDetails, addAllAppointments, setAppointmentView, setDetailsView} from '../actions';
import ApptDates from '../components/ApptDates';

const getDates = (appointments) =>{
  return appointments.filter((apptDate)=>apptDate.start >= Date
   )
}


const mapStateToProps = state => {
  return ({
    appointmentDates: state.appointments,
    view: state.view
  })
}

const mapDispatchToProps = dispatch => {
  return({
    getAppointmentDetails: id => dispatch(showAppointmentDetails(id)),
    setAppointmentView: ()=> dispatch(setAppointmentView()),
    setDetailsView: ()=> dispatch(setDetailsView()),
    addAllAppointments: patientId=> dispatch( addAllAppointments(patientId) ),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApptDates);
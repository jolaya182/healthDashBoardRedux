/* *
  title: index.js 

  date: 5/28/2019

  author:  javier olaya

  description: all the actions that will be used for the dashboard  
         
 */
export const  showAppointments = (patient_id) =>({
  type: 'SHOW_APPOINTMENTS',
  patient_id, 
  showshowAppointments: true
});

export const  addAllAppointments = (patient_id) =>({
  type: 'ADD_ALL_APPOINTMENTS',
  patient_id, 
  showshowAppointments: true,
}); 

export const showAppointmentDetails = (id) =>({
  type: 'SHOW_APPOINTMENT_DETAILS',
  id,
  showAppointmentDetailsInfo: false
})

export const  showPhysician = (physician_id) =>({
  type: 'SHOW_PHYSICIAN',
  physician_id: physician_id,
  showPhysicianInfo: false
})

export const  DontShowPhysician = (physician_id) =>({
  type: 'DONT_SHOW_PHYSICIAN',
  physician_id: physician_id,
  showPhysicianInfo: false
})

export const getAppointmentdate = () =>({
  type: "GET_APPOINTMENT_VIEW"
})

export const getAppointmentView = ({
  GET_APPOINTMENT_VIEW: "GET_APPOINTMENT_VIEW",
  GET_DETAILS_VIEW: "GET_DETAILS_VIEW"
})

export const setAppointmentView = ()=>({
  type : "GET_APPOINTMENT_VIEW"
})

export const setDetailsView = ()=>({
  type : "GET_DETAILS_VIEW"
})

export const data = [{
  "created_at" : "2020-04-21T10:44:51-06:00",
  "end" : "2015-04-24T07:30:00-06:00",
  "id" : 695,
  "patient_id" : 16,
  "physician_id" : 14,
  "start" : "2020-04-24T07:00:00-06:00",
  "updated_at" : "2020-04-21T10:44:51-06:00",
  "patient_name" :"Mike Ross",
  "physician_name" : "Gregory House",
  "appointmentDetails":[
    {'Last_Appointment':"2020-04-24T07:00:00-06:00",
      "Patient_Symptoms":"high temperature",
      "physician_id" : 14,
      }
  ]
},
{
  "created_at" : "2020-04-21T10:44:51-06:00",
  "end" : "2015-04-24T07:30:00-06:00",
  "id" : 696,
  "patient_id" : 16,
  "physician_id" : 15,
  "start" : "2020-04-24T07:00:00-06:00",
  "updated_at" : "2020-04-21T10:44:51-06:00",
  "patient_name" :"Mike Ross",
  "physician_name" : "Joey Mill",
  "appointmentDetails":[
    {'Last_Appointment':"2019-04-24T07:00:00-06:00",
      "Patient_Symptoms":"flu, cough,",
      "physician_id" : 15,
      }
  ]
},

]

export const physicianData = {
  14:{
    "physician_name" : "Gregory House",
    "specialty": "critical care",
    "education": "tufts university",
    "years_experience": 10,
    "physician_id" : 14,
  },
  15:{
    "physician_name" : "Joey Mill",
    "specialty": "urgent care",
    "education": "Cornell university",
    "years_experience": 5,
    "physician_id" : 15,
  }
};
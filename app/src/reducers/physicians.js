/* *
  title: physicians.js 

  date: 5/28/2019

  author:  javier olaya

  description: reducer that handles all the sate of the physians data  
         
 */
import {physicianData} from "../actions";
const physicians = (state = physicianData, action) => {
  switch (action.type) {
    case 'SHOW_PHYSICIAN':
      return [state[action.physician_id] ]
    case "DONT_SHOW_PHYSICIAN":
      return physicianData;
    default:
      return state;
    }
}

export default physicians;
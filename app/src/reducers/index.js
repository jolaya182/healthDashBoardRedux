/* *
  title: index.js 

  date: 5/28/2019

  author:  javier olaya

  description: combines all reducers   
         
 */
import {combineReducers} from 'redux';
import appointments from './appointments';
import physicians from './physicians';
import view from './view';
export default combineReducers({appointments, physicians, view});
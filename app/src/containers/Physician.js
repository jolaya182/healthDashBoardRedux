/* *
  title: Physician.js 

  date: 5/28/2019

  author:  javier olaya

  description: redux container that connects the Physician component  
         
 */
import {connect} from 'react-redux';
import {showPhysician, DontShowPhysician} from '../actions';
import Physician from '../components/Physician';

const mapStateToProps = (state) => {
  return({
    physician: state.physicians
  });
}

const mapDispatchToProps = (dispatch) =>{
  return ({
    onHover: physician_id => dispatch(showPhysician(physician_id)),
    hoverOut: physician_id => dispatch(DontShowPhysician(physician_id) )
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Physician)
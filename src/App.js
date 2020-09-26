import React from 'react';
import {connect} from 'react-redux';
import ViewComponent from './ViewComponent';
import {
  addContactAction,
  deleteContactAction,
  updateContactAction
} from '../src/redux/action'

function App(props) {
  return (
    <ViewComponent  {...props}/>
  );
} 
const mapStateToProps = state => ({
  selectedData: state.selectedData,
  list: state.contactList,
}) 
const mapDispatchToProps = dispatch => ({
  addContactAction : (data) => dispatch(addContactAction(data)),
  deleteContactAction: (index) => dispatch(deleteContactAction(index)),
  updateContactAction: (data, index) => dispatch(updateContactAction(data, index))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

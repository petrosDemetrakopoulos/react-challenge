import React, {Component} from 'react';
import UserTable from './components/UserTable'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateUser, getUsersSuccess, getUsers, fetchUsers, TriggerUpdateUser} from './actions/UserActions'
import UserReducer from './reducers/UserReducer';
import thunkMiddleware from 'redux-thunk'
import './App.css';


let initialState = {users:[]}
const store = createStore(UserReducer, initialState, applyMiddleware(thunkMiddleware));

class App extends Component {

  constructor(props) {
    super(props);
    this.togleUser = this.togleUser.bind(this);
  }

  togleUser(user) {
    this.props.TriggerUpdateUser(user)
    //this.props.updateUser({id: id, active: active})
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
  return (
    <div className="App">
      <UserTable usersList={this.props.usersList} togleUser={this.togleUser}/>
    </div>
  );
}

}

const mapStateToProps = (state) => {
  return {
    usersList : state.users,
    hasErrors: state.users.hasErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateUser:updateUser,
    getUsers: getUsers,
    getUsersSuccess: getUsersSuccess,
    fetchUsers: fetchUsers,
    TriggerUpdateUser: TriggerUpdateUser
  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

import React, { Component } from 'react';
import {TriggerUpdateUser} from '../actions/UserActions'
class UserItem extends Component {
  constructor(props){
    super(props);
    this.state ={isActive: props.isActive}
    this.togleUser = this.togleUser.bind(this);
  }

  togleUser(user){
    const {id} = this.props.user.id;
    let updatedUser = this.props.user
    updatedUser.active = !updatedUser.active;
    TriggerUpdateUser(updatedUser) 
    this.props.togleUser(updatedUser);
  }

  render() {
    const {name, email, phone, type, active} = this.props.user;
    return  (
        <tr key={this.props.id}>
        <td><input type="checkbox" ref={activeInput => this.activeInput = activeInput} 
        checked={active} onChange={this.togleUser}/></td>
        <td>{type}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{active ? "Active" : "Inactive"}</td>
</tr>
      );
  }
}

export default UserItem
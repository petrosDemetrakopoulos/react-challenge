import React, {Component} from 'react';
import UserList from './UserList'
import TableHeader from './TableHeader'

class UserTable extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return(
			<div>
			<TableHeader/>
			<table className="table table-hover">
                  <thead className="tableHeader">
                    <tr className="headerText">
                      <th></th>
                      <th>Type</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Telephone</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <UserList
                    usersList={this.props.usersList}
                    togleUser={this.props.togleUser}
                  />
                </table>
                </div>
			);
	}
}

export default UserTable;


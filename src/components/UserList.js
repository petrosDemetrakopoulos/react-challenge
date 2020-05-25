import React, { Component } from 'react';
import UserItem from './UserItem'

class UserList extends Component {
	render() {
		let users = this.props.usersList;
		const userRow = users.map((item, index) => (
			<UserItem
				key={item.id}
				user={item}
				togleUser={this.props.togleUser}
			/>
		));
		return <tbody>{userRow}</tbody>;
	}
}

export default UserList
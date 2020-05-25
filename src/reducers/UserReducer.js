const UserReducer = (state = [],action) => {

switch(action.type) {
  case 'GET_USERS':
    return state
  case 'GET_USERS_SUCCESS':
    return { users: action.payload, loading: false, hasErrors: false }
  case 'GET_USERS_FAILURE':
    return { ...state, loading: false, hasErrors: true }
  case 'UPDATE_USER_FAILURE':
    return { ...state, loading: false, hasErrors: true }
  case 'UPDATE_USER':
  console.log(state);
    let stateCopy = {}
    stateCopy.users = state.users.map((user) => {
      console.log(action);
      const {id,name,email,phone, active} = action.payload;
      if(user.id === id){
        user.active = active
      }
      return user;
    })
  return stateCopy
  default:
    return state;
}

}

export default UserReducer;
import React from 'react';

export function TriggerUpdateUser(user) {
return function (dispatch) {
    dispatch(updateUser(user))
    try {
        fetch('http://petros.users.challenge.dev.monospacelabs.com/users/' + user.id, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  }).then(response => response.json()).then(json => {
        dispatch(updateUserSuccess(json))})
    } catch (error) {
      dispatch(updateUserFailure())
    }
    
    }
}

export const GET_USERS = 'GET_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE'

export const getUsers = () => ({ type: GET_USERS })
export const updateUser = user => ({type: 'UPDATE_USER', payload: user})
export const getUsersSuccess = users => ({
  type: GET_USERS_SUCCESS,
  payload: users,
})
export const updateUserSuccess = user => ({
    type: UPDATE_USER_SUCCESS,
    payload: user
})
export const updateUserFailure = () => ({ type: GET_USERS_FAILURE })
export const getUsersFailure = () => ({ type: GET_USERS_FAILURE })

export function fetchUsers() {
  return function (dispatch) {
    dispatch(getUsers())

    try {
      fetch('http://petros.users.challenge.dev.monospacelabs.com/users').then(response => response.json()).then(json => 
        dispatch(getUsersSuccess(json)))
    } catch (error) {
      dispatch(getUsersFailure())
    }
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import UserReducer from './reducers/UserReducer';
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'


let initialState = {users:[{id:"1341243", type:"CO", name:"Petran", email:"petrosdem@gmail.com", phone:"123345456", status: true}]};
const store = createStore(UserReducer, initialState, applyMiddleware(thunkMiddleware));
ReactDOM.render(
   <Provider store={store}> <App /></Provider>,
  document.getElementById('root')
);

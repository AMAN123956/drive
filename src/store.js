import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {userLoginReducer, userRegisterReducer} from './reducers/userReducers'

const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer
})

const userInfoFromStorage=localStorage.getItem('driveUserInfo')?JSON.parse(localStorage.getItem('driveUserInfo')):null


const initialState={userLogin:{userInfo:userInfoFromStorage}}

const middleware=[thunk]

const store=createStore(reducer,initialState,applyMiddleware(...middleware))

export default store
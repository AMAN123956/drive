import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {userDetailReducer, userLoginReducer, userRegisterReducer} from './reducers/userReducers'

const reducer=combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetail:userDetailReducer
})

const userInfoFromStorage=localStorage.getItem('driveUserInfo')?JSON.parse(localStorage.getItem('driveUserInfo')):null


const initialState={userLogin:{userInfo:userInfoFromStorage}}

const middleware=[thunk]

const store=createStore(reducer,initialState,applyMiddleware(...middleware))

export default store
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import UserReducer from './users/UserReducer';
import { thunk } from "redux-thunk";

let rootreducer=combineReducers({
    
    UserReducer:UserReducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))
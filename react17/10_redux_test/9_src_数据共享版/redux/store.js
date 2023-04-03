/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-05 00:10:46
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-06 13:41:46
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import countReducer from "./reducers/count";
import personReducer from "./reducers/person";

const allReducers = combineReducers({
    he: countReducer,
    rens: personReducer
})

export default createStore(allReducers, applyMiddleware(thunk));
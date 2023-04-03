/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-05 00:10:46
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 11:08:08
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import countReducer from "./count_reducer";

export default createStore(countReducer, applyMiddleware(thunk));
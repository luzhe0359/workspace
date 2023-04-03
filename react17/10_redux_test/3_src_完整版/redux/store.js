/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-05 00:10:46
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 00:15:36
 */
import { createStore } from 'redux'
import countReducer from "./count_reducer";

export default createStore(countReducer)
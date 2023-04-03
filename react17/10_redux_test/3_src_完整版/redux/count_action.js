/*
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-08-05 00:34:41
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 00:40:07
 */
import { INCREMENT, DECREMENT } from "./constant";


export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
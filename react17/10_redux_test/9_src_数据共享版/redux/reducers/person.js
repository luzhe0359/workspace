/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-06 13:15:14
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-06 13:21:04
 */
import { ADD_PERSON } from '../constant'

// 初始化 人员
const initState = [{ id: '001', name: 'tom', age: 10 }]

export default function personReducer (perState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...perState]
        default:
            return perState
    }
}
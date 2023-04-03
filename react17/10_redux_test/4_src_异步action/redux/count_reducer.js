/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-05 00:11:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 00:40:31
 */
import { INCREMENT, DECREMENT } from "./constant";

// 初始化状态
const initState = 0
export default function countReducer (preState = initState, action) {
    // 从action 对象中取出：type，data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        case INCREMENT: // +
            return preState + data
        case DECREMENT: // -
            return preState - data
        default:
            return preState
    }
}
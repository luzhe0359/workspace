/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-05 00:11:04
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 00:21:14
 */

// 初始化状态
const initState = 0
export default function countReducer (preState = initState, action) {
    // 从action 对象中取出：type，data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        case 'increment': // +
            return preState + data
        case 'decrement': // -
            return preState - data
        default:
            return preState
    }
}
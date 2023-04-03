/*
 * @Description: 
 * @Author: zugelu
 * @Date: 2021-08-05 00:34:41
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 11:08:40
 */
// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from "./constant";

// 同步action, 就是指action的值为Object 类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

// 异步action, 就是指action的值为函数, 异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}
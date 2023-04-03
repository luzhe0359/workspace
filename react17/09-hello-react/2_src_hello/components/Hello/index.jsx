/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-31 13:00:27
 * @LastEditors: zugelu
 * @LastEditTime: 2021-07-31 18:00:37
 */
import { Component } from 'react';
import hello from './index.module.css'

export default class Hello extends Component {
    render () {
        return (
            <h3 className={hello.hello}>Hello World !</h3>
        )
    }
}
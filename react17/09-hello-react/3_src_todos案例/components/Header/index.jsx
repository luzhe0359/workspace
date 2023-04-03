/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-31 13:00:27
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-02 11:03:39
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    }

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        // 获取回车键
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            return alert('请输入内容')
        }
        const todo = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todo)
        // 清空
        target.value = ''
    }

    render () {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-31 13:00:27
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-02 11:07:56
 */
import { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css'

export default class Item extends Component {
    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
    }


    // 鼠标移入/移出 状态标识
    state = {
        flag: false,
    }

    // 鼠标 移入/移出
    handleMouse = (flag) => {
        return () => {
            this.setState({ flag })
        }
    }

    // 勾选切换
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除
    handleDelete = (id) => {
        if (window.confirm('确定要删除吗？')) {
            this.props.deleteTodo(id)
        }
    }

    render () {
        const { id, name, done } = this.props
        const { flag } = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: flag ? "#ccc" : "#fff" }} >
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: flag ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
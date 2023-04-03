/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-07-31 13:00:27
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-02 11:13:06
 */
import { Component } from 'react';
import './index.css'

export default class Footer extends Component {

    // 全选
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked);
    }

    // 清除已完成的
    handleClearDone = () => {
        this.props.clearDoneTodo();
    }

    render () {
        const { todos } = this.props
        const doneCount = todos.reduce((prev, next) => prev + (next.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={total === doneCount && total !== 0 ? true : false} onChange={this.handleCheckAll} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}

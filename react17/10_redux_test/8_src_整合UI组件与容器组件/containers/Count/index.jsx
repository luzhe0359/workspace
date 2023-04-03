import React, { Component } from 'react'
// 引入connect用于连接redux
import { connect } from 'react-redux'
// 
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";


class Count extends Component {
    // +
    increment = () => {
        const { value } = this.selectVal
        this.props.jia(+value)
    }

    // -
    decrement = () => {
        const { value } = this.selectVal
        this.props.jian(+value)
    }

    // 奇数 +
    incrementIfOdd = () => {
        const { value } = this.selectVal
        if (this.props.count % 2 !== 0) {
            this.props.jia(+value)
        }
    }

    // 异步 +
    incrementAsync = () => {
        const { value } = this.selectVal
        this.props.jiaAsync(+value, 500)
    }

    render () {
        return (
            <div>
                <h3>求和结果是多少呢：{this.props.count}</h3>
                <select ref={c => this.selectVal = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <hr />
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数再加</button>
                <button onClick={this.incrementAsync}>异步再加</button>
            </div>
        )
    }
}


export default connect(
    state => ({ count: state }),
    // mapDispatchToProps 一般写法
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
    // })
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)
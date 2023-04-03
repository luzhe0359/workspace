import React, { Component } from 'react'
import store from '../../redux/store';
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";


export default class Count extends Component {

    // componentDidMount () {
    //     // 检测 redux中状态的变化，只要改变，就调用render
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // +
    increment = () => {
        const { value } = this.selectVal
        store.dispatch(createIncrementAction(value * 1))
    }

    // -
    decrement = () => {
        const { value } = this.selectVal
        store.dispatch(createDecrementAction(value * 1))
    }

    // 奇数 +
    incrementIfOdd = () => {
        const { value } = this.selectVal
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }
    }

    // 异步 +
    incrementAsync = () => {
        const { value } = this.selectVal
        // setTimeout(() => {
        // store.dispatch(createIncrementAction(value * 1))
        // }, 500)

        store.dispatch(createIncrementAsyncAction(value * 1, 500))
    }



    render () {
        return (
            <div>
                <h3>求和结果是多少呢： {store.getState()}</h3>
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

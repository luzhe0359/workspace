import React, { Component } from 'react'
import store from '../../redux/store';



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

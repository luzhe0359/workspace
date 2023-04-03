import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }

    // +
    increment = () => {
        const { value } = this.selectVal
        const { count } = this.state
        console.log(count, value);
        this.setState({ count: count + value * 1 })
    }

    // -
    decrement = () => {
        const { value } = this.selectVal
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }

    // 奇数 +
    incrementIfOdd = () => {
        const { value } = this.selectVal
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }

    // 异步 +
    incrementAsync = () => {
        const { value } = this.selectVal
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500)
    }



    render () {
        const { count } = this.state

        return (
            <div>
                <h3>求和结果是多少呢： {count}</h3>
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

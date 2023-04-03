import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        name: 'hello'
    }

    changeState = () => {
        // this.setState({ name: '娃哈哈' })
        this.setState(state => ({ name: "你好啊。" }))
    }

    render () {
        return (
            <div>
                <h3>这是state的值：{this.state.name}</h3>
                <button onClick={this.changeState}>点击更改</button>
            </div>
        )
    }
}

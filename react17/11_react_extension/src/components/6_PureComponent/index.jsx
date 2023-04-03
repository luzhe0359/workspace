import React, { PureComponent } from 'react'

export default class A extends PureComponent {
    state = { uname: 'Jack' }

    changeName = () => {
        this.setState({ uname: 'Quasar' })
        // this.setState({})
    }
    render () {
        return (
            <>
                <h3>我是A组件</h3>
                <h3>这是我的名字：{this.state.uname}</h3>
                <button onClick={this.changeName}>点我更名</button>
                <B propsName={this.state.uname} />
            </>
        )
    }
}

class B extends PureComponent {
    render () {
        return (
            <>
                <h3>我是B组件</h3>
                <h3>我是接收到的参数：{this.props.propsName}</h3>
            </>
        )
    }
}

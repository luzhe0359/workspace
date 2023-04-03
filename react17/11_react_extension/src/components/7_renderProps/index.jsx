import React, { PureComponent } from 'react'
import './index.css'

export default class A extends PureComponent {
    state = { uname: 'Jack' }
    render () {
        console.log('~');
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h3>这是我的名字：{this.state.uname}</h3>
                <B render={(hello) => <C hello={hello} />} />
            </div>
        )
    }
}

class B extends PureComponent {
    state = { hello: 'wolrd!' }
    render () {
        return (
            <div className="a">
                <h3>我是B组件</h3>
                {this.props.render(this.state.hello)}
            </div>
        )
    }
}

class C extends PureComponent {
    render () {
        return (
            <div className="b">
                <h3>我是C组件</h3>
                <span>{this.props.hello}</span>
            </div>
        )
    }
}


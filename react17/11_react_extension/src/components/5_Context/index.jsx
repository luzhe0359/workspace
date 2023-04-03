import React, { Component } from 'react'


const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = { uname: 'Jack' }

    render () {
        return (
            <>
                <h3>我是A组件</h3>
                <Provider value={this.state.uname}>
                    <B />
                </Provider>
            </>
        )
    }
}

class B extends Component {
    state = { uname: 'Jack' }

    render () {
        return (
            <>
                <h3>我是B组件</h3>
                <C />
            </>
        )
    }
}

// class C extends Component {
//     static contextType = MyContext
//     state = { uname: 'Jack' }

//     render () {
//         return (
//             <>
//                 <h3>我是C组件</h3>
//                 <h4>这是我从A接收到的值：{this.context}</h4>
//             </>
//         )
//     }
// }

function C () {


    return (
        <>
            <h3>我是C组件</h3>
            <h4>这是我从A接收到的值：
                <Consumer>
                    {value => value}
                </Consumer>
            </h4>

        </>
    )
}
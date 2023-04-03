import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// #region
// export default class Demo extends Component {
//     state = {
//         count: 0
//     }

//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     componentDidMount = () => {
//         this.timmer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }

//     componentWillUnmount = () => {
//         clearInterval(this.timmer)
//     }

//     render () {
//         return (
//             <div>
//                 <h3>这是一个自增数字：{this.state.count}</h3>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>点我销毁</button>
//             </div>
//         )
//     }
// }
// #endregion

export default function Demo () {
    // useState
    const [count, setCount] = React.useState(0)
    // useRef
    const countRef = React.useRef()

    // useEffect
    React.useEffect(() => {
        console.log(1);
        let timmer = setInterval(() => {
            setCount(count + 1)
        }, 1000)

        // willunmount
        return () => {
            clearInterval(timmer)
        }
    }, [count])

    // 添加回调
    function add () {
        setCount(count => count + 1)
    }

    // 销毁回调
    function unmount () {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    // show回调
    function show () {
        console.log(countRef.current.innerHTML);
    }
    return (
        <div>
            <h3 ref={countRef}>这是一个自增数字：{count}</h3>
            <button onClick={add}>点我+1</button>
            <hr />
            <button onClick={unmount}>点我销毁</button>
            <hr />
            <button onClick={show}>点我获取ref</button>
        </div>
    )
}
import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '01买汽车' },
            { id: '02', title: '02养汽车' },
            { id: '03', title: '03卖汽车' },
        ]
    }

    replaceShow = (id, title) => {
        // replace 跳转+携带 params 参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace 跳转+携带 search 参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace 跳转+携带 state 参数
        this.props.history.replace(`/home/message/detail`, { id, title })
    }

    pushShow = (id, title) => {
        console.log(id, title);
        // push 跳转+携带 params 参数
        // this.props.history.push(`/ home/message/detail/${id}/${title}`)

        // push 跳转+携带 search 参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push 跳转+携带 state 参数
        this.props.history.push(`/home/message/detail`, { id, title })
    }

    back = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        // this.props.history.go(2)
        this.props.history.go(-1)
    }


    render () {
        const { messageArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递 params 参数 */}
                                    {/* <Link to={`/ home / message / detail / ${ msgObj.id } / ${ msgObj.title }`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/* <Link to={`/ home / message / detail ? id = ${ msgObj.id } & title=${ msgObj.title }`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link replace to={{ pathname: "/home/message/detail", state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
                                    <button onClick={() => { this.pushShow(msgObj.id, msgObj.title) }}>push按钮</button>
                                    <button onClick={() => { this.replaceShow(msgObj.id, msgObj.title) }}>replace按钮</button>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收 params 参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* 声明接收 search 参数 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* 声明接收 state 参数 */}
                <Route path="/home/message/detail" component={Detail} />

                <hr />
                <button onClick={this.back}>回退</button>
                <button onClick={this.forward}>回退</button>
                <button onClick={this.go}>go 想去哪就去哪</button>
            </div>
        )
    }
}

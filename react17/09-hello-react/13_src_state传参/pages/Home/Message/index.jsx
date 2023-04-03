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
                                    {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递 search 参数 */}
                                    {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递 state 参数 */}
                                    <Link replace to={{ pathname: "/home/message/detail", state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>
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
            </div>
        )
    }
}
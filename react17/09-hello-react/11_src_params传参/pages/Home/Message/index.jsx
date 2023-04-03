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
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
    render () {
        return (
            <div>
                <h2>home</h2>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">news</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/message">message</MyNavLink>
                    </li>
                </ul>
                {/* 注册路由 */}
                <Switch>
                    <Route path="/home/news" component={News} />
                    <Route path="/home/message" component={Message} />
                    <Redirect to="/home/news" />
                </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: '',
    }

    componentDidMount () {
        this.token = PubSub.subscribe('zugelu', (msg, stateObj) => {
            this.setState(stateObj);
        });
    }

    componentWillUnmount () {
        PubSub.unsubscribe(this.token);
    }

    render () {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h3>请输入后搜索</h3> :
                        isLoading ? <h3>loading、、、</h3> :
                            err ? <h3>{err}</h3> :
                                users.map((user) => {
                                    return (
                                        <div className="card" key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img alt="avator" src={user.avatar_url} style={{ width: '100px' }} />
                                            </a>
                                            <p className="card-text">{user.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        )
    }
}

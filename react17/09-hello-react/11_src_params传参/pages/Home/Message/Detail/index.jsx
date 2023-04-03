import React, { Component } from 'react'

export default class Detail extends Component {

    render () {
        // params 接收参数
        const { id, title } = this.props.match.params
        return (
            <div>
                <h3>{id}</h3>
                <h3>{title}</h3>
            </div>
        )
    }
}

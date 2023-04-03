import React, { Component } from 'react'
// import qs from 'querystring'

export default class Detail extends Component {

    render () {
        // params 接收参数
        // const { id, title } = this.props.match.params

        // search 接收参数
        // const { search } = this.props.location
        // const { id, title } = qs.parse(search.slice(1))

        // state 接收参数
        const { id, title } = this.props.location.state || {}

        return (
            <div>
                <h3>{id}</h3>
                <h3>{title}</h3>
            </div>
        )
    }
}

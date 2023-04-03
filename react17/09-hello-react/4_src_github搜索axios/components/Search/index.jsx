import React, { Component } from 'react'
import axios from 'axios'

export default class Seacrh extends Component {

    handleSearch = () => {
        const { keyWordEle: { value: keyWord } } = this // 连续解构：并重命名
        // 初次调用 
        this.props.updateAppState({ isFirst: false, isLoading: true })
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            res => this.props.updateAppState({ isLoading: false, users: res.data.items }),
            err => this.props.updateAppState({ isLoading: false, err: err.message }))
    }
    render () {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={(e) => this.keyWordEle = e} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}

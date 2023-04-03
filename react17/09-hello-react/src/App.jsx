import React, { Component } from 'react'
import { Button, DatePicker, } from 'antd';
// import 'antd/dist/antd.css'

export default class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render () {
    return (
      <div>
        <h3> app 。。</h3>
        <button> 按钮</button>
        <Button type="primary">Primary Button</Button>
        <DatePicker onChange={this.onChange} picker="week" />
      </div>
    )
  }
}

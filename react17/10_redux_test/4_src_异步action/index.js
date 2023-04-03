/*
 * @Description:
 * @Author: zugelu
 * @Date: 2021-08-04 19:56:20
 * @LastEditors: zugelu
 * @LastEditTime: 2021-08-05 11:07:26
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';

ReactDOM.render(<App />, document.getElementById('root'))

store.subscribe(() => {
    ReactDOM.render(<App />, document.getElementById('root'))
})
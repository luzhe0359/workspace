import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 引入antd样式
import 'antd/dist/antd.less';

const root = ReactDom.createRoot(document.getElementById('app'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
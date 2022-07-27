import React from "react";
import "./index.less";

import { Button } from 'antd'

export default function Home () {
    return (
        <div>
            <h1 className="home-title">home</h1>
            <Button type="primary">主题按钮</Button>
        </div>
    )
}
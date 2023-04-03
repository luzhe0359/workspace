import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import Home from './pages/Home'
import About from './pages/About'

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <Link className="list-group-item " to="/about">About</Link> */}
              {/* <NavLink activeClassName="active" className="list-group-item " to="/about">About</NavLink>
              <NavLink activeClassName="active" className="list-group-item " to="/home">Home</NavLink> */}
              <MyNavLink to="/home" >Home</MyNavLink>
              <MyNavLink to="/about" >About</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <h3>我是About的内容</h3> */}
                <Switch>
                  {/* 严格匹配 */}
                  <Route path="/home" component={Home} />
                  <Route path="/about" component={About} />
                  <Redirect to="/home" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

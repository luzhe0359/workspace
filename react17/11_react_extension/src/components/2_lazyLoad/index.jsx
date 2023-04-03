import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route } from 'react-router-dom'

// import Home from './Home'
// import About from './About'
import Loading from './Loading'
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
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
                            <NavLink activeClassName="active" className="list-group-item " to="/about">About</NavLink>
                            <NavLink activeClassName="active" className="list-group-item " to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* <h3>我是About的内容</h3> */}
                                <Suspense fallback={<Loading />}>
                                    <Route path="/home" component={Home} />
                                    <Route path="/about" component={About} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

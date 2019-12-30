import React from 'react'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Main from './Main'
import About from './../route1/About'
import Topic from './../route1/Topic'
import { render } from '@testing-library/react'
import Home from './Home'

export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
               <Home>
                    <Route exact={true} path="/main" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/topic" component={Topic} />
               </Home>
            </Router>
        )
    }
}
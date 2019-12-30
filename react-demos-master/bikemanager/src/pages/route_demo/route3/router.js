import React from 'react'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Main from './Main'
import About from './../route1/About'
import Topic from './../route1/Topic'
import Home from './Home'
import Info from './Info'

export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
               <Home>
               <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:id" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        {/* <Route component={NoMatch}></Route> */}
                    </Switch>
               </Home>
            </Router>
        )
    }
}
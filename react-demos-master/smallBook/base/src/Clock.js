import React,{ Component } from 'react'

class Clock extends Component{
    constructor(props) {
        super();
        this.state = {
            date:new Date()
        }
    }

    componentWillMount() {
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        },1000)
    }

    render() {
        return (<div>{this.state.date.toLocaleTimeString()}</div>)
    }
}

export default Clock
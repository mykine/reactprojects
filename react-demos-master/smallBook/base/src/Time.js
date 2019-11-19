import React,{ Component } from 'react'
import Clock from "./Clock";

class Time extends Component{
    constructor(){
        super()
        this.state = {isShowClock:true}
    }

    handleShowOrHide(){
        this.setState({isShowClock:!this.state.isShowClock} )
    }

    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}

                <button onClick={this.handleShowOrHide.bind(this)}>
                    {this.state.isShowClock ? '隐藏' : '显示'}
                </button>
            </div>
        )
    }


}

export default Time
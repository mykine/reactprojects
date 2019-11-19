import React,{ Component } from 'react'
import Clock from "./Clock";
import PropTypes from 'prop-types'
<<<<<<< HEAD
=======

>>>>>>> 55b9d82d0060dd94a5b5f7435fe8b1dd69e7b1d2

class Time extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    constructor(){
        super()
        this.state = {
            isShowClock:true,
            htmlStr:'<span style="color: coral">哈阿啊哈</span>'
        }
    }

    handleShowOrHide(){
        this.setState({isShowClock:!this.state.isShowClock} )
    }

    render() {
        return (
            <div>
                {this.state.htmlStr}
                <div dangerouslySetInnerHTML={{__html:this.state.htmlStr}}></div>

                <div style={{fontSize:'26px',color:'red'}}>啦啦啦</div>

                {this.state.isShowClock ? <Clock><h2>当前时间:</h2></Clock> : null}

                <button onClick={this.handleShowOrHide.bind(this)}>
                    {this.state.isShowClock ? '隐藏' : '显示'}
                </button>
            </div>
        )
    }


}

export default Time
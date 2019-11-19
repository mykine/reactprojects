import React,{ Component } from 'react'
import Clock from "./Clock";
import PropTypes from 'prop-types'

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
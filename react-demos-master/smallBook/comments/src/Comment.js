import React,{ Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object
    }
    constructor(){
        super()
        this.state = { timeString:''}
    }
    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString () {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString:duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration,1))} 秒前`
        })
    }

    handleDeleteComment(){
        if( this.props.onDeleteComment ){
            this.props.onDeleteComment( this.props.index )
        }
    }
    render (){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span> {this.props.comment.username}:{this.props.comment.content}  ({this.state.timeString}) </span>
                    <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>删除</span>
                </div>

            </div>
        )
    }
}

export default Comment
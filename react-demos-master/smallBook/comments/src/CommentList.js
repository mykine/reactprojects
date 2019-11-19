import React,{ Component } from "react"
import Comment from './Comment'

class CommentList extends Component{
    static defaultProps ={
        comments : []
    }
    render() {
        return (
            <div>
                {this.props.comments.map(function(comment,i){
                    return (
                        <div key={i}>
                            <Comment comment={comment} key={i} ></Comment>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CommentList
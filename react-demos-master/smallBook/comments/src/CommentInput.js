import React,{ Component } from "react"

class CommentInput extends Component{
    constructor(){
        super()
        this.state = {
            username:'',
            content:''
        }
    }
    componentWillMount(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({username})
        }
    }
    componentDidMount () {
        this.textarea.focus()
    }
    handleUsernameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleContentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state
            this.props.onSubmit({username,content})
        }
        this.setState({content:''})
    }
    handleUsernameBlur(event){
       localStorage.setItem('username',event.target.value)
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}
                                  value={this.state.content}
                                  onChange={this.handleContentChange.bind(this)} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
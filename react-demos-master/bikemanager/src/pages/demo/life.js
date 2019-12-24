import React from 'react'
import { render } from '@testing-library/react'
export default class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0 
        };
    } 
    //箭头函数没有自己的作用域，不会默认绑定到window实例，会在编译时被识别到当前组件的实例进行绑定
    handleAdd=()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    //事件回调使用普通方法时要用.bind(this)绑定当前对象，因为DOM全局的对象是window,onClick={this.*}的this默认的对象就是window实例
    handleMinus(){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
         return (
         <div>
            <p> life cycle</p>
            <button onClick={this.handleAdd}>click+1</button>
            <button onClick={this.handleMinus.bind(this)}>click-1</button>
            {this.state.count}
         </div>
         )
     }
}
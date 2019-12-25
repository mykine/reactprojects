import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0 
        };
    } 

    UNSAFE_componentWillMount(){
        console.log("WillMount");
    }

    componentDidMount(){
        console.log("DidMount");
    }

    UNSAFE_componentWillReceiveProps(newPros){
        console.log("receiveProps.name="+newPros.name);
    }

    shouldComponentUpdate(){
        console.log("should update");
        return true;
    }

    UNSAFE_componentWillUpdate(){
        console.log("will update");
    }

    componentDidUpdate(){
        console.log("Did update");
    }
    
    render(){         
         return (
            <div>
                <p>名字:{this.props.name}</p>
            </div>
         )
     }
}
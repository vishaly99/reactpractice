import logo from './logo.svg';
import './App.css';
import React from 'react';
class ComponentDidUpdate extends React.Component{
    constructor()
    {
        super();
        console.warn("constructor");
        this.state={
            name:"asd",
            count:0
        }
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
        console.warn("componentDidUpdate",preState);
    }
    render()
    {
        console.warn("render");
        return(
            <div className='App'>
                <h1>Component did mount {this.state.count}</h1>
                <button onClick={()=>{this.setState({name:"qqq"})}}>Update</button>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count</button>
            </div>
        );
    }
}
export default ComponentDidUpdate;
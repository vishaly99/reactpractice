import logo from './logo.svg';
import './App.css';
import React from 'react';
class ShouldComponentUpdate extends React.Component{
    constructor()
    {
        super();
        //console.warn("constructor");
        this.state={
            
            count:0
        }
    }
    shouldComponentUpdate()
    {
        console.warn("shouldComponentUpdate",this.state.count);
        return true;
    }
    render()
    {
        //console.warn("render");
        return(
            <div className='App'>
                <h1>Component did mount {this.state.count}</h1>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count</button>
            </div>
        );
    }
}
export default ShouldComponentUpdate;
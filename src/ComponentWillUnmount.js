import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './Student';
class ComponentWillUnmount extends React.Component{
    constructor()
    {
        super();
        this.state={
            show:true
        }
    }
    render()
    {
        //console.warn("render");
        return(
            <div className='App'>
                {
                    this.state.show ?<Student />:<h1>Child Component Removed</h1> 
                }
                
                <button onClick={()=>{this.setState({show:!this.state.show})}}>Toogle</button>
            </div>
        );
    }
}
export default ComponentWillUnmount;
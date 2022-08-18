import './App.css';
import React,{useEffect,useState} from 'react';

function UseEffectProps(props)
{
    useEffect(()=>{
        console.warn("UseEffect With Condition");
    },[props.data,props.count])
   
    return(
        <div>
            <h1>Count: {props.count}</h1>
            <h1>Data: {props.data}</h1>
        </div>
    )
}
export default UseEffectProps;
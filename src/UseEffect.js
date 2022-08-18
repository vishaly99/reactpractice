import './App.css';
import React,{useEffect,useState} from 'react';
import UseEffectProps from './UseEffectProps';
function UseEffect()
{
    const [count,setCount]=useState(0)
    const [data,setData]=useState(0)
    // useEffect(()=>{
    //     console.warn("UseEffect Without Condition");
    // })
    // //UseEffect Condition
    // useEffect(()=>{
    //     console.warn("UseEffect");
    // },[count])
    return(
        <div>
            <UseEffectProps count={count} data={data} />
            <button onClick={()=>setCount(count+1)}>count</button>
            <button onClick={()=>setData(data+1)}>Data</button>
        </div>
    )
}
export default UseEffect;
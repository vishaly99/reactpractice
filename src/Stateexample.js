import {useState} from "react";
function Stateexample()
{
    const [data,setdata]=useState(0)
    function updatedata()
    {
        setdata(data+1)
    }
    console.warn("---------");
    return (
        <div className="App">
            <h1>{data}</h1>
            <button onClick={updatedata}>Update data</button>
        </div>
    );
}
export default Stateexample
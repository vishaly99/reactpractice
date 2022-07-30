import {useState} from "react";
function GetDataExample()
{
    const [data,setdata]=useState(null)
    const [print,setprint]=useState(false)
    function getdata(val)
    {
        setdata(val.target.value)
        setprint(false)
    }
    
    return (
        <div className="App">
            {
                print?
                <h1>{data}</h1>
                :null
            }
            <input type="text" onChange={getdata}></input>
            <button onClick={()=>setprint(true)}>Print data</button>
        </div>
    );
}
export default GetDataExample
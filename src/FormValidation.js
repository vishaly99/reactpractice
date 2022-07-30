import React,{useState} from "react";
function FormValidation()
{
    const [user,setuser]=useState("");
    const [pass,setpass]=useState("");
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    function loginmodule(e)
    {
        if(user.length<3 || pass.length<3)
        {
            alert("type correct values");
        }
        else
        {
            alert("all good :)");
        }
        e.preventDefault();
    }
    function userhandler(e)
    {
        let item=e.target.value;
        item.length<3?setUserErr(true):setUserErr(false)
        // if(item.length<3)
        // {
        //     setUserErr(true)
        // }
        // else
        // {
        //     setUserErr(false)
        // }
        setuser(item)
    }
    function passhandler(e)
    {
        let item=e.target.value;

        item.length<3?setPassErr(true):setPassErr(false)
        // if(item.length<3)
        // {
        //     setPassErr(true)
        // }
        // else{
        //     setPassErr(false)
        // }
        setpass(item)
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginmodule}>
                <input type="text" placeholder="Enter user id" onChange={userhandler} />{userErr?<span>User is not valid</span>:""}
                <br />
                <input type="password" placeholder="Enter your password" onChange={passhandler} />{passErr?<span>Pass is not valid</span>:""}
                <br />
                <button type="Submit">Login</button>
            </form>
        </div>
    )
}
export default FormValidation;
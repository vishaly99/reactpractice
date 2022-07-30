import {useState} from 'react'
function ProfileExample()
{
    const [loggedIn,setLoggedIn]=useState()

    return(
        <div>
            {
                loggedIn==1?
                <h1>Welcome guest</h1>
                :loggedIn==2?<h1>Welcome 1</h1>
                :loggedIn==3?<h1>Welcome 2</h1>
                :<h1>Welcome use3</h1>
            }
        </div>
    )
}
export default ProfileExample;
import React from "react";
class Rendermethod extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:"asd@gmail.com"
        }
    }
    render()
    {
        console.warn("Render Method",this.state.email)
        return(
            <div>
                <h1>Render Method Component</h1>
                <button onClick={()=>this.setState({email:"qqq@gmail.com"})}>Update Email address</button>
            </div>
        )
    }
}
export default Rendermethod;
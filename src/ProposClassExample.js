import React,{Component} from "react";
class ProposClassExample extends Component
{
    render()
    {
        console.log(this.props)
        return (
            <h1>Hello {this.props.name}</h1>
        )
    }
} 
export default ProposClassExample;
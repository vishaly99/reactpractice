function ProposExample(props)
{
    console.log(props)
    return (

        <div>
            <h1>ProposExample Component</h1>
            <h1>Hello {props.name}</h1>
            {/* <h1>Email {props.email}</h1>
            <h1>address {props.others.address}</h1>
            <h1>contactno {props.others.mobileno}</h1>     */}
        </div>
        
    ) 
}
export default ProposExample;
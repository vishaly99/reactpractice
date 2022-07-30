import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function HandleForm() {
    const [name,setname]=useState("")
    const [fruit,setfruit]=useState("")
    const [tc,settc]=useState(false)
    function getFormData(e)
    {
        console.log(name,fruit,tc);
        
        e.preventDefault()
    }
    return (
        <div className='App'>
            <h1>Handle Form in React</h1>
            <form onSubmit={getFormData}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/>
                </label><br />
                <label>
                    Fruit:
                <select onChange={(e)=>setfruit(e.target.value)}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                </label><br />
                <label>
                    Tc:
                    <input type="checkbox" onChange={(e)=>settc(e.target.checked)}/><span>Accept t and c</span>
                </label><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default HandleForm;
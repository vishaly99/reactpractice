import logo from './logo.svg';
import './App.css';
import User from './User';
import Classcomponent from './Classcomponent';
import Jexample from './Jsxexample';
import Stateexample from './Stateexample';
import StateClassExample from './StateClassExample';
import ProposExample from './ProposExample';
import ProposClassExample from './ProposClassExample';
import GetDataExample from './GetDataExample';
import ProfileExample from './ProfileExample';

import { useState } from 'react';
function App() {
  const [name,setname]=useState("Vishal")
  function Example1()
  {
    
    return (<div>calling function in another function</div>)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <ProfileExample />
      <User/>
      <Classcomponent/>
      <Example1 />
      <Jexample />
      <Stateexample />
      <StateClassExample />
      <ProposExample name={name} />
      <ProposClassExample name={name} />
      <button onClick={()=>{setname("asd")}}>Update data</button>
      <GetDataExample />
      {/* <ProposExample name={"vishal"} email={"vishal@gmail.com"} others={{address:'surat',mobileno:"021"}} />
      <ProposExample name={"v"} email={"v@gmail.com"} others={{address:'surat',mobileno:"021"}} /> */}
    </div>
  );
}

export default App;

import React from 'react';
class Student extends React.Component{
   componentWillUnmount()
   {
        console.warn("componentWillUnmount");
   }
    render()
    {
        //console.warn("render");
        return(
            <div className='App'>
                <h1>Student</h1>
                
            </div>
        );
    }
}
export default Student;
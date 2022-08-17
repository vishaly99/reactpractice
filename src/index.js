import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HandleForm from './HandleForm';
import FormValidation from './FormValidation';
import reportWebVitals from './reportWebVitals';
import ComponentConstructor from './ComponentConstructor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HandleForm /> */}
    {/* <FormValidation /> */}
  {/* <ComponentConstructor /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

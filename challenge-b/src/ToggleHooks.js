import './App.css';
import React, { useState } from 'react';


//APP CREATED WITH HOOKS (FUNCTION)

const ToggleHooks=()=> {
  
const [text, setText] = useState('ON');

const  handleClick=() =>{
  let newText = text === "ON" ? "OFF" : "ON";
   setText(newText); 
   
   }



    return (
      <div>
        <h1>Button created with hooks:</h1>
        <button style={{color:"red"}} onClick={handleClick}>{text}</button>
      </div>
    );
  
}


export default ToggleHooks;
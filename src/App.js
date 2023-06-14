import {useContext, useState } from 'react';
import './App.css';
import Box from './Components/Box'
import Button from './Components/Button'
import InputContext from './Components/inputContext';

function App() {
    const [input, setInput] = useState('')
    
  return (
    <InputContext.Provider value={{input,setInput}}>
      <Button/>
    </InputContext.Provider>
  );
}

export default App;

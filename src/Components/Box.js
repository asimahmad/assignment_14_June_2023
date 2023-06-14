import React, { useEffect, useState, useContext } from 'react'
import InputContext from './inputContext';
export default function Box({unique, setCancelCard}) {
    const {input, setInput} = useContext(InputContext)
    const [message, setMessage] = useState('');

    function handleMessage(e){
        setMessage(e.target.value);
    }
    function handleSend(){
        setInput(message)
        setMessage('')
    }
  return (
        <div className='box-card'>
            <button className='cancel' onClick={()=>setCancelCard(unique)}>X</button>
            <p>{input}</p>
            <div className='dialog-box'>
                <input className='input' type='text-area' placeholder='type message' value={message} onChange={(e)=>handleMessage(e)} />
                <button className='sbt-button' onClick={handleSend}>Send</button>
            </div>
        </div>
  )
}

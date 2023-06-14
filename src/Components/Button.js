import React, { useEffect, useState,useContext } from 'react'
import Box from './Box'
import InputContext from './inputContext'

export default function Button() {
    const style = {
        'borderRadius': '3px',
        'border': '1px solid green',
        'backgroundColor': ' rgb(167, 243, 144)',
        'position': 'relative',
        'float': 'right',
        'margin': '10px',
        'fontSize':'20px',
    }
    const {input, setInput} = useContext(InputContext);
    const [box,setBox] = useState([]);

    function handleButton(){
        setBox([...box,null])
    }

    function setCancelCard(unique){
      setBox([...box.slice(0,unique), ...box.slice(unique+1,box.length)])
      box.length<2 && setInput('')
    }

  return (
    <div>
      <button style={style} onClick={handleButton}>Add ChatBox</button>
      <div className='cards'>
        {
            box.map((item,index)=>{
                return(
                    <Box key={index} unique={index} setCancelCard={setCancelCard}/>
                )
            })
        }
      </div>
    </div>
  )
}

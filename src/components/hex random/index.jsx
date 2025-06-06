import { useState } from "react";
import React from 'react'

function Randomcolor() {
    const [typeofcolor, setTypeofcolor] = useState('hex');
    const [color, setColor] = useState('#000000');
    function handlecreateRandomhexColor() 
    {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','A', 'B', 'C', 'D', 'E', 'F'];
        let randomColor = '#'; 
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * hex.length);
            randomColor += hex[randomIndex];
        }
        setColor(randomColor);
    }
    function handlecreateRandomrgbColor(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${r}, ${g}, ${b})`;
        setColor(randomColor);
    } 

  return (
    <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
    }}>
        <button onClick={()=>setTypeofcolor('hex')}>Hex color</button>
        <button onClick={()=>setTypeofcolor('rgb')}>RGB color</button>
        <button onClick={typeofcolor === 'hex'? handlecreateRandomhexColor : handlecreateRandomrgbColor}>Generate Random Color</button>
        <h1 style={{color: typeofcolor === 'hex' ? '#fff' : '#555'}}>{color}</h1>
        <h2 style={{color: typeofcolor === 'hex' ? '#fff ' : '#555'}}>Type of color: {typeofcolor}</h2>
    </div>
  )
}

export default Randomcolor;
import React, { useState } from 'react';
import data from './data.js';
import './style.css';
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [multiSelect, setMultiSelect] = useState([]);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);

    function singleselction(id) {
        if (selected === id) {
            return setSelected(null);
        }
        setSelected(id);
    }
    function multiSelection(id) {
        let cpymultiple= [...multiSelect];
        const findindex = cpymultiple.indexOf(id)
        if (findindex !== -1) {
            cpymultiple.splice(findindex, 1);
        } else {
            cpymultiple.push(id);
        }
        setMultiSelect(cpymultiple);
            } 

    return <div className="wrapper">
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)
        }>
            Enable multi Selecton</button> 
        <div className="accordian">
        {data && data.length > 0 ? 
        data.map((dataitem)=>(
        <div className='item'>
            <div onClick={enableMultiSelect ?()=> multiSelection(dataitem.id):()=>singleselction(dataitem.id)} className='title'>
                <h3>
                    {dataitem.question}</h3>
                    <span>
            {enableMultiSelect
                ? multiSelect.includes(dataitem.id) ? '-' : '+'
                : selected === dataitem.id ? '-' : '+'}
        </span>
            </div>
            {enableMultiSelect ?
            multiSelect.includes(dataitem.id) && <div className='content'>
                <p>{dataitem.answer}</p>
            </div> :
            selected === dataitem.id && <div className='content'>
                <p>{dataitem.answer}</p>
            </div>}
                
            
        </div>))
        : <div className='no-data'>
            <h3>No Data Available</h3>
            </div>}</div>
    </div>
}

import React ,{useState} from 'react'
import Menulist from './menu-list'
import {FaMinus,FaPlus} from 'react-icons/fa'; // Import icons if needed

function Menuitem({item}) {

const [displaycurrentchildren, setDisplayCurrentChildren] =useState({});

function handlechildren(label) {
    setDisplayCurrentChildren({
        ...displaycurrentchildren,
        [label] : !displaycurrentchildren[label]
});
}

  return (
    <li className='menu-item'>
        <div style={{display:'flex', alignItems:'center', cursor:'pointer',gap:'10px',color:'#fff'}}>
        <p>{item.label}</p>
        { item.children && item.children.length ?<span onClick={()=>handlechildren(item.label)}>
            {displaycurrentchildren[item.label] ? <FaMinus color='#fff' size={25} /> : <FaPlus color='#fff' size={25} />}
        </span>:null}
        </div>
        {
            item.children && item.children.length>0 && displaycurrentchildren[item.label] ?
            <Menulist list={item.children} /> : null
        }
    </li>
  )
}

export default Menuitem
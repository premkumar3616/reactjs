import React from 'react'
import Menuitem from './menu-item';
import './styles.css';

function Menulist({list = []}) {
  return (
    <ul className='menu-list'>
        {
            list && list.length ?
            list.map(listitem => <Menuitem item ={listitem} />):
            null
        }
    </ul>
  )
}

export default Menulist
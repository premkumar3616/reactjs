import React from 'react'
import Menulist from './menu-list'


function Menu({menus =[]}) {
  return (
    <div className='tree-container'>
        <Menulist list={menus} />
    </div>
  )
}

export default Menu
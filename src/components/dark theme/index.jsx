import React, { use } from 'react'
import useLocalStorage from './useLocalStorage';
import './styles.css';
function Theme() {
const [theme, setTheme] = useLocalStorage('theme', 'light');
function handletoggletheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
}

  return (
    <div className='light-dark-mode' data-theme={theme}>
        <div className="container">
            <p>Hello world!</p>
            <button onClick={()=>handletoggletheme()}>Change theme</button>
        </div>
    </div>
  )
}

export default Theme
import React,{useState} from 'react'
import './styles.css';
function Tabs({tabsContent,onChange}) {
const [currentTabIndex, setCurrentTabIndex] = useState(0);

function HandleOnCLick(index) {
    setCurrentTabIndex(index);
    if (onChange) {
        onChange(index);
    }
}

  return (
    <div className='wrapper'>
        <div className="heading">
            {
                tabsContent.map((tabitem,index)=>
                <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={()=>HandleOnCLick(index)} key={tabitem.label}>
                    <span className='label'>{tabitem.label}</span>
                    </div>)
            }
        </div>
        <div className="content">
            {tabsContent[currentTabIndex]&&tabsContent[currentTabIndex].content}
        </div>
    </div>
  )
}

export default Tabs
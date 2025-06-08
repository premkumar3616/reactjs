import React from 'react'
import Tabs from './index.jsx';

function RandomComponent(){
    return (
        <div>
            <h2>Random Component</h2>
            <p>This is a random component that can be used in the Tabs.</p>
        </div>
    );
}

function Tabtest() {
  const tabsContent = [
    { label: 'Tab 1', content: 'Content for Tab 1' },
    { label: 'Tab 2', content: 'Content for Tab 2' },
    { label: 'Tab 3', content: <RandomComponent /> },
  ];

  const handleTabChange = (index) => {
    console.log(`Active tab index: ${index}`);
  };

  return (
    <div className='tabtest'>
      <Tabs tabsContent={tabsContent} onChange={handleTabChange} />
    </div>
  );
}

export default Tabtest
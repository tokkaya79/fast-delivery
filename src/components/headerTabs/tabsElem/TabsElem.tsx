import React, { useState } from 'react';

import './style.scss';

interface Tab {
  title: string;
  content: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div>{tabs[activeIndex].content}</div>
    </div>
  );
};

export default Tabs;
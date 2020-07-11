import React from 'react';
// eslint-disable-next-line
import Accordion from './components/Accordion';
// eslint-disable-next-line
import Search from './components/Search';

// eslint-disable-next-line
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components',
  },
];


/*
    Enable <Accordion items={items}/> to see Accordian application and <Search/> to see Search application
*/
export default () => {
  return (
    <div>
      <Accordion items={items}/>
      <Search/>
    </div>
  );
};

import React, { useState } from 'react';
// eslint-disable-next-line
import Accordion from './components/Accordion';
// eslint-disable-next-line
import Search from './components/Search';
// eslint-disable-next-line
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';


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

const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];


/*
    Enable <Accordion items={items}/> to see Accordian application and <Search/> to see Search application
*/
export default () => {
// eslint-disable-next-line
  const [selected, setSelected] = useState(options[0]);
  // eslint-disable-next-line
  const [showDropdown, setShowDropdown] = useState(true);

  return (
   <div>
    {/*<Accordion items={items}/>*/}
    {/*<Search/>*/}

      {/*<button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
          label='Select a color'
        />
      ) : null}*/}

      <Translate/>

    </div>

  );
};

import React from 'react';
import Accordion from './Accordion';

const items = [
    {
    title: 'What is React?',
    content: 'React is very popular front end JS lib',
    },
    {
    title: 'Why we use React?',
    content: 'React is very popular front end JS lib',
    },
    {
    title: 'How we use React?',
    content: 'We use react by creating react components',
    }
];

const App = () => {
    return(
        <Accordion items={items}/>
    )
}

export default App;
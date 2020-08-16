import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'green',
        value: 'green color'
    },
    {
        label: 'red',
        value: 'red color'
    },
    {
        label: 'blue',
        value: 'blue color'
    }
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);


    return (
        <Dropdown
        options = {options}
        selected = {selected}
        onSelectedChange = {setSelected}
        label = 'Please select a color'
        />
    );
}

export default  App;
import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';


const Dropdown = ({options, selected, onSelectedChange, label}) => {
    const ref =  useRef();
    const [open, setOpen] = useState(false);


    useEffect( () => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target.value)){
                return;
            }
            setOpen(false);
        }
            document.body.addEventListener('click', onBodyClick);

        return () => {
             document.body.removeEventListener('click', onBodyClick);
        }

    }, []);


    const renderItems = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }

        return (<div key={option.value}
            onClick = {() => onSelectedChange(option)}
            className="item">
            {option.label}
        </div>);
    });




    return(
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div
                    className= {`ui selection dropdown ${open ? 'visible active': ''}`}
                    onClick = {() => {setOpen(!open)}}>
                    <i className="dropdown icon"/>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderItems}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
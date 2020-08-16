import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
    /*
    The below block checks that if event is coming from 'ui form' div element don't let body event listener
    do anything.
    */
      if (ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick);

/*
    Below is clean up function which gets invoked when the dropdown component is completely removed by
    clicking on dropdown toggle button.
    Once dropdown component is removed, when we click on anywhere on page body we get below error.
    'Cannot read property 'contains' of null' -- it is line no. 13 of this file
    So we wrote clean up code to remove the body event listener in this case.
*/
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
      {/*Below label is to show dropdown values*/}
        {option.label}
      </div>
    );
  });


/*
Problem: When we click on dropdown element, body event listener was closing the dropdown,
but when onclick event listener of dropdown event listener was called it was setting !open, so dropdown was opening again.
Solution to close the dropdown on click on dropdown element or body is to stop body event listener from closing the dropdown
if we click on dropdown element.
This can be achieved by using useRef, add ref to most parent element of dropdown element and then check
if the onClick event is matching with the ref. If it matches then don't let body event listener close the dropdown.
*/
  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}>

          <i className="dropdown icon"></i>
          {/*Below label is to show selected dropdown value*/}
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

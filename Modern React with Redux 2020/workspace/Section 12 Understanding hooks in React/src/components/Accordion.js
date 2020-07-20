import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };


/*
React.Fragment is added in accordion component to remove extra div which was creating a additional border on other 2 divs.
To show only JSX content without wrapping it in additional div use React.Fragment.


On click event flow:
item.content is dependent on className to be active or inactive.
Once users clicks and onTitleClick is called, it sets the active label to active, once that is done then
` content $active`} gets enabled which in turn starts showing content.

If u set classname="content active" it will always shows all the content irrespective of on click event.
*/
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;

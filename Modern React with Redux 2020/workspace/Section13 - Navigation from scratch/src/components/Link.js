import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {

  /*
  below code is to open component in new window when user presses crtl key+header link
  */
    if (event.metaKey || event.ctrlKey) {
      return;
    }

/*
    prevent default i s to prevent from loading all css and html for every component render
*/
    event.preventDefault();

    /*
    below line updates the browser url as per the link clicked
    */
    window.history.pushState({}, '', href);

/*
    below code generates popstate event, which is then Route component
    to accordingly invoke the clicked component
*/
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

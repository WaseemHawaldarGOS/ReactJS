import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    /*The popstate event of the Window interface is fired when the active history entry changes while the user navigates the session history.
        It changes the current history entry to that of the last page the user visited or,
    if history.pushState() has been used to add a history entry to the history stack, that history entry is used instead.*/
    window.addEventListener('popstate', onLocationChange);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;

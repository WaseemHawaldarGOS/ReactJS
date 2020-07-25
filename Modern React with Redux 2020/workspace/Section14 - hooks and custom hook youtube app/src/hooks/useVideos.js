/*
    This is a custom hook.
    Custom hooks are not used to make JSX code reusable (for this we can define reusable component),
    but custom hooks are used to make state setting and retrieving reusable.
*/


import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);


/*
    THis method makes call to youtube videos API and return search method as well as response videos.
*/
    const KEY = 'AIzaSyA6ozh1xCz41nN-2GxBVkLKSQ3P2ZJyOqU';

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
       q: term,
       part: "snippet",
       maxResults: 5,
       key: KEY
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;

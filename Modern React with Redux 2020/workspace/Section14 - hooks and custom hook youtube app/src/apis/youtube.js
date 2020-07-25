import axios from 'axios';

const KEY = 'AIzaSyA6ozh1xCz41nN-2GxBVkLKSQ3P2ZJyOqU';

/*
    This makes call to youtube API to fetch videos.
*/
/*export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});*/

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  });

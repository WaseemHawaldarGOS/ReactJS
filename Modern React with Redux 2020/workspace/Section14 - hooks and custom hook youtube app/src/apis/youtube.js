import axios from 'axios';

const KEY = 'AIzaSyDVfeUxsJzp8Vs0xnFGlhC2zrllcqbC4zc';

/*
    This makes call to youtube API to fetch videos.
*/
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});

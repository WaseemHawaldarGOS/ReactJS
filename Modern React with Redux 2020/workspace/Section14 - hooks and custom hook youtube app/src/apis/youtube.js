import axios from 'axios';

const KEY = 'AIzaSyA88ak-On1k9B3MX5_BtZ_VGe9pBWs14zo';

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

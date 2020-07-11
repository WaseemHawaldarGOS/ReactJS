import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ydT-cDhvYZS8RsZ5OKzf46yGDESZNXmVR7kez_aIO_A'
  }
});

import axios from 'axios';

// create an instance
const instance = axios.create({
  baseURL: 'https://clone-tinder-api.herokuapp.com/'
})

export default instance;
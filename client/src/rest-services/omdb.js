import axios from 'axios';
const KEY = '62fc8798';

export default axios.create({
    baseURL: 'http://www.omdbapi.com/',
    params: {
        apikey: KEY
    }
})
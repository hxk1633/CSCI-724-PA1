import axios from 'axios';
const KEY = 'S94s42rbuNJLOnAGXLDAf0CtBpO1sfYA';

export default axios.create({
    baseURL: 'https://api.nytimes.com/svc/movies/v2/reviews',
    params: {
        'api-key': KEY
    }
})
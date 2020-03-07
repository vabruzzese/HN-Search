import axios from 'axios';

const BASE_URL = 'http://hn.algolia.com/api/v1';

const getStories = (query) => {
    return axios.get(`${BASE_URL}/search?query=${query}&tags=story`);
}

export default {
    getStories,
};

import store from '../rootStore';
import searchApi from '../../api/searchApi';

export const fetchStories = (payload = {}) => {
    const dispatch = store.dispatch;
    dispatch({ type: 'FETCH_STORIES_REQUEST', payload });
    return searchApi.getStories(payload.query)
        .then(response => dispatch({ type: 'FETCH_STORIES_SUCCESS', payload: response.data.hits }))
        .catch(err => dispatch({ type: 'FETCH_STORIES_FAILURE', payload: err }))
};

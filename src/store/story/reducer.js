const getInitialState = () => ({
    stories: [],
    isFetching: false,
    error: '',
});

export const story = (state = getInitialState(), { type, payload }) => {
    switch(type) {
        case 'FETCH_STORIES_REQUEST':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_STORIES_SUCCESS':
            return {
                ...state,
                stories: [...payload],
                isFetching: false,
            };
        default:
            return state;
    }
}

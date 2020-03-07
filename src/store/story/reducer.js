import { createSelector } from "reselect";

const getInitialState = () => ({
    stories: [],
    selectedStory: null,
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
        case 'FETCH_STORIES_ERROR':
            return {
                ...state,
                isFetching: false,
                error: payload,
            };
        case 'SELECT_STORY':
            return {
                ...state,
                selectedStory: {
                    ...payload
                },
            }
        default:
            return state;
    }
}

export const getStory = state => state.story;

export const getSelectedStory = createSelector(
    getStory,
    ({ selectedStory }) => selectedStory,
);

export const getIsFetching = createSelector(
    getStory,
    ({ isFetching }) => isFetching,
);

export const getStories = createSelector(
    getStory,
    ({ stories }) => stories,
);

import React from 'react';
import store from '../../store/rootStore';
import { getSelectedStory } from '../../store/story/reducer';
import { MediaCard } from './MediaCard';

export const SearchResult = () => {
    const state = store.getState();
    const story = getSelectedStory(state);
    return (
        <div>
            {story && Object.keys(story).length !== 0 && (
                <MediaCard story={story} />
            )}
        </div>
    );
};

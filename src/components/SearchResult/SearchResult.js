import React from 'react';
import store from '../../store/rootStore';
import { getSelectedStory } from '../../store/story/reducer';

export const SearchResult = () => {
    const state = store.getState();
    const story = getSelectedStory(state);
    return (
        <div>
            {story && (
                <div>
                    {story.name} <br/>
                    {story.url}
                </div>
            )}
        </div>
    );
};

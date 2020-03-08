import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchStories } from '../../store/story/actions';
import store from '../../store/rootStore';
import { getIsFetching, getStories } from '../../store/story/reducer';

export const SearchBar = () => {
  const dispatch = store.dispatch;
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');
  const state = store.getState();
  const loading = getIsFetching(state);
  const stories = getStories(state);

  useEffect(() => {
    let active = true;

    (async () => {
      await fetchStories({ query: query });

      if (active) {
        setOptions(stories.map(story => ({
          name: story.title,
          url: story.url,
          author: story.author,
          score: story.relevancy_score,
        })));
      }
    })();

    return () => {
      active = false;
    };
  }, [query]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSelect = (event, value) => {
    dispatch({
      type: 'SELECT_STORY',
      payload: value
    });
  }

  return (
    <Autocomplete
      style={{ width: 600, marginTop: 10 }}
      open={open}
      onChange={handleSelect}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

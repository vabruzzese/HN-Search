import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchStories } from '../../store/story/actions';
import store from '../../store/rootStore';

export const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      await fetchStories({ query: query });
      const state = store.getState();
      const stories = state.story.stories

      if (active) {
        setOptions(stories.map(story => ({
          name: story.title,
          url: story.url,
          author: story.author,
          score: story.relevancy_score,
        })));
        setLoading(false);
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

  return (
    <Autocomplete
      style={{ width: 600, marginTop: 10 }}
      open={open}
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
          label="Search"
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

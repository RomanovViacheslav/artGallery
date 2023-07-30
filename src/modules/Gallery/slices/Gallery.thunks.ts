import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { paintingsAgentInstance } from '../../../http/agent/Paintings.agent';
import { mapPaintings, mapSelect, mapToExternalFilters } from '../helpers';

export const fetchPaintings = createAsyncThunk(
  'gallery/fetchPaintings',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const { filters } = state.gallery;
    const res = await paintingsAgentInstance.filterPaintings(mapToExternalFilters(filters));
    return mapPaintings(res);
  },
);

export const fetchLocations = createAsyncThunk('gallery/fetchLocations', async () => {
  const res = await paintingsAgentInstance.getAllLocations();
  return mapSelect(res);
});

export const fetchAuthors = createAsyncThunk('gallery/fetchAuthors', async () => {
  const res = await paintingsAgentInstance.getAllAuthors();
  return mapSelect(res);
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { paintingsAgentInstance } from '../../../http/agent/Paintings.agent';
import { mapPaintings, mapSelect, mapToExternalFilters } from '../helpers';

export const fetchPaintings = createAsyncThunk(
  'gallery/fetchPaintings',
  async (page: number, { getState }) => {
    try {
      const state = getState() as RootState;
      const { filters } = state.gallery;
      const res = await paintingsAgentInstance.filterPaintings(mapToExternalFilters(filters), page);
      const paintings = mapPaintings(res.paintings);
      const { totalCount } = res;
      return { paintings, totalCount };
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
      throw new Error('Ошибка');
    }
  },
);

export const fetchLocations = createAsyncThunk('gallery/fetchLocations', async () => {
  try {
    const res = await paintingsAgentInstance.getAllLocations();
    return mapSelect(res);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Ошибка');
  }
});

export const fetchAuthors = createAsyncThunk('gallery/fetchAuthors', async () => {
  try {
    const res = await paintingsAgentInstance.getAllAuthors();
    return mapSelect(res);
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
    throw new Error('Ошибка');
  }
});

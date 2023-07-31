import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAuthors, fetchLocations, fetchPaintings } from './Gallery.thunks';
import { GalleryState } from '../Gallery.types';

const initialState: GalleryState = {
  filters: {
    name: '',
    author: '',
    location: '',
    created: ['', ''],
  },
  paintings: [],
  loading: false,
  error: null,
  locations: [],
  authors: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<GalleryState['filters']>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaintings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPaintings.fulfilled, (state, action) => {
        state.loading = false;
        state.paintings = action.payload;
      })
      .addCase(fetchPaintings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки данных';
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.locations = action.payload;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.authors = action.payload;
      });
  },
});

export const { updateFilters } = gallerySlice.actions;
export default gallerySlice.reducer;

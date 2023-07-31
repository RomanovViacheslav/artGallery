import { configureStore } from '@reduxjs/toolkit';
import { gallerySlice } from '../modules';
import themeSlice from '../shared/slice/themeSlice';

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
    theme: themeSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

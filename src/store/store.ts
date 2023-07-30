import { configureStore } from '@reduxjs/toolkit';
import { gallerySlice } from '../modules';

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import React, { useEffect, memo } from 'react';

import { FiltersForm } from './components';
import { fetchAuthors, fetchLocations, fetchPaintings } from './slices';
import { useAppDispatch, useAppSelector } from '../../shared';

export const Gallery = memo(() => {
  const dispatch = useAppDispatch();
  const { paintings, filters } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    console.log(paintings);
    dispatch(fetchPaintings());
  }, [filters]);

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchAuthors());
  }, []);

  return <FiltersForm />;
});

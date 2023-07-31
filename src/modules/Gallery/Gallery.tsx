import React, { useEffect, memo } from 'react';
import { FiltersForm } from './components';
import { fetchAuthors, fetchLocations, fetchPaintings } from './slices';
import { useAppDispatch, useAppSelector } from '../../shared';
import { Card, Loader } from '../../components';
import { StyledCardWrapper, StyledCardsContainer } from './Gallery.styled';
import { getName } from './helpers';

export const Gallery = memo(() => {
  const dispatch = useAppDispatch();
  const { paintings, filters, locations, authors, loading } = useAppSelector(
    (state) => state.gallery,
  );

  useEffect(() => {
    dispatch(fetchPaintings());
  }, [filters]);

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchAuthors());
  }, []);

  return (
    <>
      <FiltersForm />
      {!loading ? (
        <StyledCardsContainer>
          {paintings.map((painting) => (
            <StyledCardWrapper key={painting.id}>
              <Card
                image={painting.imgUrl}
                name={painting.name}
                location={getName(painting.locationId, locations)}
                author={getName(painting.authorId, authors)}
                created={painting.created}
              />
            </StyledCardWrapper>
          ))}
        </StyledCardsContainer>
      ) : (
        <Loader />
      )}
    </>
  );
});

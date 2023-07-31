import React, { useEffect, memo, useCallback } from 'react';
import { FiltersForm } from './components';
import { fetchAuthors, fetchLocations, fetchPaintings, setCurrentPage } from './slices';
import { useAppDispatch, useAppSelector } from '../../shared';
import { Card, Loader, Pagination } from '../../components';
import { StyledCardWrapper, StyledCardsContainer } from './Gallery.styled';
import { getName } from './helpers';

export const Gallery = memo(() => {
  const dispatch = useAppDispatch();
  const { paintings, filters, locations, authors, loading, currentPage } = useAppSelector(
    (state) => state.gallery,
  );

  useEffect(() => {
    dispatch(fetchPaintings(currentPage));
  }, [currentPage, filters]);

  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchAuthors());
  }, []);

  const handlePageChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
  }, []);

  return (
    <>
      <FiltersForm />
      {!loading ? (
        <>
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
          <Pagination page={currentPage} onChange={handlePageChange} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
});

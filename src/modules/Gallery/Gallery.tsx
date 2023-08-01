import React, { useEffect, memo, useCallback } from 'react';
import { Box } from '@mui/system';
import { FiltersForm } from './components';
import { fetchAuthors, fetchLocations, fetchPaintings, setCurrentPage } from './slices';
import { useAppDispatch, useAppSelector } from '../../shared';
import { Card, Loader, Pagination } from '../../components';
import { StyledCardWrapper, StyledCardsContainer } from './Gallery.styled';
import { getName } from './helpers';

export const Gallery = memo(() => {
  const dispatch = useAppDispatch();
  const { paintings, filters, locations, authors, loading, currentPage, totalCount } =
    useAppSelector((state) => state.gallery);

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
    <Box width="100%" paddingTop="35px" paddingBottom="100px">
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
          <Pagination
            page={currentPage}
            onChange={handlePageChange}
            count={Math.ceil(totalCount / 12)}
          />
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
});

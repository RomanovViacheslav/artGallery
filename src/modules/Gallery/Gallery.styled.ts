import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { StyledGalleryProps } from './Gallery.types';

export const StyledCardsContainer = styled(Box)<StyledGalleryProps>(({ theme }) => ({
  marginTop: '45px',
  marginBottom: '40px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: { gridTemplateColumns: 'repeat(2, 1fr)' },
  [theme.breakpoints.down('sm')]: { gridTemplateColumns: 'repeat(1, 1fr)' },
  [theme.breakpoints.down('xs')]: {},
}));

export const StyledCardWrapper = styled(Box)<StyledGalleryProps>(({ theme }) => ({
  width: '100%',
  maxHeight: '275px',
  [theme.breakpoints.down('lg')]: {
    maxHeight: '230px',
  },
  [theme.breakpoints.down('md')]: {
    maxHeight: '249px',
  },
  [theme.breakpoints.down('sm')]: { minHeight: '205px' },
  [theme.breakpoints.down('xs')]: {},
}));

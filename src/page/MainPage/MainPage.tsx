import React from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { Select, TextFieldComponent } from '../../components';
import { Gallery, Header } from '../../modules';

const MainPage = () => (
  <Box width="100%">
    <Header />
    <Gallery />
  </Box>
);

export default MainPage;

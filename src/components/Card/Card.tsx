import React, { memo } from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { StyledCard } from './Card.styled';
import { CardProps } from './Card.types';
import { APP_BACKEND_URL } from '../../shared';

export const Card = memo(({ image, name, location, author, created, ...props }: CardProps) => (
  <StyledCard>
    <CardMedia height="100%" component="img" src={APP_BACKEND_URL + image} alt={name} />
    <CardContent>
      <Typography gutterBottom variant="h6" color="info.contrastText" component="h6">
        {name}
      </Typography>
      <Box display="flex" gap="8px">
        <Typography variant="subtitle1" color="info.contrastText" component="span">
          Author:
        </Typography>
        <Typography variant="subtitle2" color="info.contrastText" component="span">
          {author}
        </Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography variant="subtitle1" color="info.contrastText" component="span">
          Created:
        </Typography>
        <Typography variant="subtitle2" color="info.contrastText" component="span">
          {created}
        </Typography>
      </Box>
      <Box display="flex" gap="8px">
        <Typography variant="subtitle1" color="info.contrastText" component="span">
          Location:
        </Typography>
        <Typography variant="subtitle2" color="info.contrastText" component="span">
          {location}
        </Typography>
      </Box>
    </CardContent>
  </StyledCard>
));

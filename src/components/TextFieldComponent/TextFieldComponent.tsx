import React, { memo } from 'react';
import { InputBase } from '../InputBase';
import { StyledFormControl } from './TextFieldComponent.styled';
import { TextFieldProps } from './TextFieldComponent.types';

export const TextFieldComponent = memo(({ ...props }: TextFieldProps) => (
  <StyledFormControl variant="standard">
    <InputBase inputProps={{ 'aria-label': 'Name' }} {...props} />
  </StyledFormControl>
));

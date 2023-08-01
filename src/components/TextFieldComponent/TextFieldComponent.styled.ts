import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { StyledTextFieldProps } from './TextFieldComponent.types';

export const StyledFormControl = styled(FormControl)<StyledTextFieldProps>(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.down('lg')]: {

  },
  [theme.breakpoints.down('md')]: {

  },
  [theme.breakpoints.down('sm')]: {

  },
  '& .MuiInputBase-input': {
    minHeight: 'auto',
    padding: '0 15px',
  },
}));

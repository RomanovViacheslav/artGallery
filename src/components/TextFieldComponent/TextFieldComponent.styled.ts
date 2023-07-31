import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { StyledTextFieldProps } from './TextFieldComponent.types';

export const StyledFormControl = styled(FormControl)<StyledTextFieldProps>(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.down('lg')]: {
    // maxWidth: '265px',
  },
  [theme.breakpoints.down('md')]: {
    // maxWidth: '220px',
  },
  [theme.breakpoints.down('sm')]: {
    // minWidth: '160px',
    // maxWidth: '100%',
  },
  '& .MuiInputBase-input': {
    minHeight: 'auto',
    padding: '0 15px',
  },
}));

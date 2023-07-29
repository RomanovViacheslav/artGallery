import styled from '@emotion/styled';
import { FormControl } from '@mui/material';
import { StyledTextFieldProps } from './TextFieldComponent.types';

export const StyledFormControl = styled(FormControl)<StyledTextFieldProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('xs')]: {
    maxWidth: '280px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '160px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '220px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '265px',
  },
  '& .MuiInputBase-input': {
    minHeight: 'auto',
    padding: '0 15px',
  },
}));

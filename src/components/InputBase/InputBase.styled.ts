import { InputBase, OutlinedInput } from '@mui/material';
import styled from '@emotion/styled';
import { StyledInputProps } from './InputBase.types';

export const StyledInput = styled(OutlinedInput)<StyledInputProps>(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: theme.palette.text.disabled,
  },
  borderRadius: '8px',
  background: theme.palette.primary.main,
  // border: `1px solid ${theme.palette.text.disabled}`,
  height: '45px',
  width: '100%',
  fontSize: theme.typography.body1.fontSize,
  fontFamily: theme.typography.body1.fontFamily,
  fontWeight: theme.typography.body1.fontWeight,
  lineHeight: theme.typography.body1.lineHeight,
  boxSizing: 'border-box',
  // padding: '15px',

  [theme.breakpoints.up('xs')]: {
    maxWidth: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '160px',
  },
  [theme.breakpoints.up('md')]: {
    maxWidth: '220px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '265px',
  },

  // '& .MuiInputBase-input': {
  //   padding: 0,
  // },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
      borderColor: theme.palette.primary.dark,

  },

  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
}));

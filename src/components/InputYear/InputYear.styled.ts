import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { InputBase } from '../InputBase';
import { StyledInputYearProps } from './InputYear.types';

export const StyledYearInput = styled(InputBase)<StyledInputYearProps>(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    border: 'none',
    background: theme.palette.secondary.main,
    padding: '15px',
    [theme.breakpoints.up('xs')]: {
      maxWidth: '110px',
    },
      [theme.breakpoints.up('lg')]: {
      maxWidth: '95px',
    },

  }));

  export const StyledSelectWrapper = styled(Box)<StyledInputYearProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  }));

  export const StyledSeparator = styled(Box)<StyledInputYearProps>(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    '& svg': {
      stroke: theme.palette.primary.dark,
    },

    margin: '0 6px',
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {
      margin: '10px 0',
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
      margin: '0 10px',
    },
  }));

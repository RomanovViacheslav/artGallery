import { Box } from '@mui/system';
import styled from '@emotion/styled';
import { InputBase } from '../InputBase';
import { StyledInputYearProps } from './InputYear.types';

export const StyledYearInput = styled(InputBase)<StyledInputYearProps>(({ theme }) => ({
    color: theme.palette.secondary.contrastText,
    border: 'none',
    background: theme.palette.secondary.main,
    padding: '15px',
    maxWidth: '95px',

    [theme.breakpoints.down('lg')]: {
      maxWidth: '110px',
    },
    [theme.breakpoints.down('sm')]: {
        maxWidth: '110px',
    },

  }));

  export const StyledSelectWrapper = styled(Box)<StyledInputYearProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    [theme.breakpoints.down('lg')]: {
      padding: 0,
      flexDirection: 'column',
    },
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.down('xs')]: {
    },
  }));

  export const StyledSeparator = styled(Box)<StyledInputYearProps>(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    '& svg': {
      stroke: theme.palette.primary.dark,
    },

    margin: '0 6px',
    [theme.breakpoints.down('lg')]: {
      margin: '15px 0',
    },
    [theme.breakpoints.down('md')]: {
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 6px',
    },
    [theme.breakpoints.down('xs')]: {

    },
  }));

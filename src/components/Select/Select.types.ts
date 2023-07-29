import { SelectProps as SelectPropsMUI } from '@mui/material';
import { ChangeEventHandler } from 'react';
import { ThemeType } from '../../theme';

export interface StyledSelectProps {
  theme?: ThemeType;
  open?: boolean;
}

export interface SelectProps extends SelectPropsMUI {
  isCreated?: boolean;
  data: string[];
  onClear?: () => void;
  onInputChange?: (value: string[]) =>void;
  value: string | string[];
}

import { SelectProps as SelectPropsMUI } from '@mui/material';
import { ThemeType } from '../../theme';
import { SelectEntity } from '../../domains';

export interface StyledSelectProps {
  theme?: ThemeType;
  open?: boolean;
}

export interface SelectProps extends SelectPropsMUI {
  isCreated?: boolean;
  data?: SelectEntity[];
  onClear?: () => void;
  onInputChange?: (value: string[]) =>void;
  value: string | string[];
}

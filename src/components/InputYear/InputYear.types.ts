import { ThemeType } from '../../theme';

export interface StyledInputYearProps {
  theme?: ThemeType;
}

export interface InputYearProps {
  onChange?: (value: string[]) => void;
  value: string[];
  defaultValue: string[];
}

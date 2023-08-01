import { FormFiltersEntity, PaintingEntity, SelectEntity } from '../../domains';
import { ThemeType } from '../../theme';

export interface GalleryState {
  filters: FormFiltersEntity;
  paintings: PaintingEntity[];
  locations: SelectEntity[];
  authors: SelectEntity[];
  loading: boolean;
  error: string | null;
  currentPage: number,
  totalCount: number,
}

export interface StyledGalleryProps {
  theme?: ThemeType;
}

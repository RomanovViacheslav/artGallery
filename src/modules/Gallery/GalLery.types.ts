import { FormFiltersEntity, PaintingEntity, SelectEntity } from '../../domains';

export interface GalleryState {
  filters: FormFiltersEntity;
  paintings: PaintingEntity[];
  locations: SelectEntity[];
  authors: SelectEntity[];
  loading: boolean;
  error: string | null;
}

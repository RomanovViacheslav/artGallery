export interface FormFiltersEntity {
  name: string;
  author: string;
  location: string;
  created: string[];
}

export interface PaintingEntity {
  id: string;
  authorId: string;
  created: string;
  imgUrl: string;
  locationId: string;
  name: string;
}

export interface SelectEntity {
  id: string;
  name: string;
}

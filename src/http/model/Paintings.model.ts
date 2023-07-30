export interface PaintingsResponseSuccess {
  id: number;
  authorId: number;
  created: string;
  imgUrl: string;
  locationId: number;
  name: string;
}

export interface PaintingsFilters {
  name?: string;
  author?: string;
  location?: string;
  yearFrom?: string;
  yearTo?: string;
}

export interface LocationResponseSuccess {
  id: number;
  location: string;
}

export interface AuthorResponseSuccess {
  id: number;
  name: string;
}

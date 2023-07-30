import { FormFiltersEntity, PaintingEntity, SelectEntity } from '../../../../domains';
import {
  AuthorResponseSuccess,
  LocationResponseSuccess,
  PaintingsFilters,
  PaintingsResponseSuccess,
} from '../../../../http';

export const mapPaintings = (data: PaintingsResponseSuccess[]): PaintingEntity[] => {
  const AllPaintings: PaintingEntity[] = [];

  data.forEach((painting) => {
    if (painting.id) {
      AllPaintings.push({
        id: String(painting.id),
        authorId: String(painting.authorId),
        created: painting.created,
        imgUrl: painting.imgUrl,
        locationId: String(painting.locationId),
        name: painting.name,
      });
    }
  });

  return AllPaintings;
};

export const mapSelect = (
  data: LocationResponseSuccess[] | AuthorResponseSuccess[],
): SelectEntity[] => {
  const AllSelect: SelectEntity[] = [];

  data.forEach((elem) => {
    if (elem.id) {
      AllSelect.push({
        id: String(elem.id),
        name: 'location' in elem ? elem.location : elem.name,
      });
    }
  });
  return AllSelect;
};

export const mapToExternalFilters = (filter: FormFiltersEntity): PaintingsFilters => ({
  name: filter.name,
  author: filter.author,
  location: filter.location,
  yearFrom: filter.created[0],
  yearTo: filter.created[1],
});

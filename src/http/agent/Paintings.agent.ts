import { APP_BACKEND_URL } from '../../shared';
import {
  PaintingsResponseSuccess,
  PaintingsFilters,
  LocationResponseSuccess,
  AuthorResponseSuccess,
} from '../model';
import { BasicAgent } from './Basic.agent';

export class PaintingsAgent extends BasicAgent {
  constructor() {
    super(APP_BACKEND_URL, {});
  }

  async getAllPaintings(page: number = 1, limit: number = 12): Promise<PaintingsResponseSuccess[]> {
    try {
      const { data } = await this._http.get(`/paintings?_page=${page}&_limit=${limit}`);
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async filterPaintings(filters: PaintingsFilters): Promise<PaintingsResponseSuccess[]> {
    try {
      console.log(filters);

      const query = PaintingsAgent.buildQueryParams(filters);
      const { data } = await this._http.get(`/paintings${query}`);
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async getAllLocations(): Promise<LocationResponseSuccess[]> {
    try {
      const { data } = await this._http.get('/locations');
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  async getAllAuthors(): Promise<AuthorResponseSuccess[]> {
    try {
      const { data } = await this._http.get('/authors');
      return data;
    } catch (error: unknown) {
      throw new Error((error as Error).message);
    }
  }

  static buildQueryParams(filters: PaintingsFilters): string {
    const queryParams = new URLSearchParams();
    if (filters.name) queryParams.append('name', filters.name);
    if (filters.author) queryParams.append('authorId', filters.author);
    if (filters.location) queryParams.append('locationId', filters.location);
    if (filters.yearFrom) queryParams.append('created_gte', filters.yearFrom);
    if (filters.yearTo) queryParams.append('created_lte', filters.yearTo);
    return `?${queryParams.toString()}`;
  }
}

export const paintingsAgentInstance = new PaintingsAgent();

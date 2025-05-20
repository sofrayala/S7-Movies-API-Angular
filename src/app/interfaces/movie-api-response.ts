import { MovieInterface } from './movie-interface';

export interface MovieApiResponse {
  page: number;
  results: MovieInterface[];
  total_pages: number;
  total_results: number;
}

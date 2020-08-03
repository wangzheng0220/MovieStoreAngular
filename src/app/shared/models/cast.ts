import { MovieCast } from './movie-cast';
export interface Cast {
  id: number;
  name: string;
  gender: string;
  tmdbUrl: string;
  profilePath: string;
  character: string;

  movieCasts: MovieCast[];
}

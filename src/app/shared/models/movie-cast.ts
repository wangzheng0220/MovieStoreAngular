import { Cast } from './cast';
import { Movie } from './movie';

export interface MovieCast {
    movieId: number;
    castId: number;
    character: string;

    cast: Cast;
    movie: Movie;
}

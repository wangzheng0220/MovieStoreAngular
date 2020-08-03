import { Movie } from './movie';

export interface Favorite {
    movieId: number;
    userId: number;

    movie: Movie;
}

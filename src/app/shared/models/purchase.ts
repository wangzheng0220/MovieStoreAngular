import { Movie } from './movie';

export interface Purchase {
    movieId: number;
    userId: number;

    movie: Movie[];
}

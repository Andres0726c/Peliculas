export interface Movie {
  id: number;
  title: string;
  description: string;
  genres: string[];
  releaseDate: string;
  vote_average: number;
  posterPath: string;
  overview: string;
}

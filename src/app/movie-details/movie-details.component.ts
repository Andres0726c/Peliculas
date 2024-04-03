import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export default class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  movies: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    console.log('movieId', movieId);

    this.tmdbService.getMovieDetails(movieId).subscribe((data: any) => {
      this.movie = data;
      console.log(this.movie);
    });
  }

  //Agregar películas a favoritos
  addToFavorites(movie: Movie) {
    this.tmdbService.addToFavorites(movie);
    this.movies = this.movies.filter(m => m.id !== movie.id);
  }
}

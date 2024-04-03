import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  searchQuery: string = '';
  movies: Movie[] = [];

  constructor(
    private tmdbService: TmdbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  //Mostrar las películas
  getPopularMovies() {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
  // Buscador de películas "barra de búsqueda"
  searchMovies() {
    if (this.searchQuery.trim() !== '') {
      this.tmdbService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
      });
    } else {
      this.getPopularMovies();
    }
  }

  //Agregar películas a favoritos
  addToFavorites(movie: Movie) {
    this.tmdbService.addToFavorites(movie);
    this.movies = this.movies.filter(m => m.id !== movie.id);
  }

  //Navegar a pantalla de detalles
  navigateToMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  searchQuery: string = '';
  movies: any[] = [];

  constructor(private tmdbService: TmdbService, private router: Router) {}

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  searchMovies() {
    if (this.searchQuery.trim() !== '') {
      this.tmdbService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
        
      });
    } else {
      this.getPopularMovies();
    }
  }

  addToFavorites(movie: any) {
    this.tmdbService.addToFavorites(movie);
  }

  navigateToMovieDetails(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
  

}

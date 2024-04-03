import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { RouterModule } from '@angular/router';
import { Movie } from '../interfaces/movies';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export default class FavoritesComponent implements OnInit {
  favorites: Movie[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
    this.favorites = this.tmdbService.getFavorites();
  }

  //Eliminar de favoritos
  removeFromFavorites(movieId: number) {
    this.tmdbService.removeFromFavorites(movieId);
    this.favorites = this.tmdbService.getFavorites();
  }
}

import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export default class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.favorites = this.tmdbService.getFavorites();
  }

  //Eliminar de favoritos
  removeFromFavorites(movieId: number) {
    this.tmdbService.removeFromFavorites(movieId);
    this.favorites = this.tmdbService.getFavorites();
  }
  

}

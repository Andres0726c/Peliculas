import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '512d612564851957d315a7a59e3c64ab';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  //Buscar películas
  searchMovies(query: string) {
    return this.http.get(`${this.apiUrl}/search/movie`, {
      params: {
        api_key: this.apiKey,
        query: query
      }
    });
  }

  //Buscar películas populares
  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey
      }
    });
  }

  //Buscar los detalles de las películas
  getMovieDetails(movieId: any) {
    return this.http.get(`${this.apiUrl}/movie/${movieId}`, {
      params: {
        api_key: this.apiKey
      }
    });
  }
  
  //Agregar a favoritos
  addToFavorites(movie: any) {
    const favorites = this.getFavorites();
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  //Buscar favoritos
  getFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }

  //Eliminar de favoritos
  removeFromFavorites(movieId: number) {
    let favorites = this.getFavorites();
    favorites = favorites.filter((movie: { id: number; }) => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  
  

}

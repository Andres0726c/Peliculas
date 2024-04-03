import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import HomeComponent from './home/home.component';
import MovieDetailsComponent from './movie-details/movie-details.component';
import FavoritesComponent from './favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,HomeComponent, MovieDetailsComponent, FavoritesComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'peliculas';
}

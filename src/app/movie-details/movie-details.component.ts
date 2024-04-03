import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export default class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    console.log('movieId',movieId);
    
    this.tmdbService.getMovieDetails(movieId).subscribe((data: any) => {
      this.movie = data;
      console.log(this.movie);
    });
  }

  addToFavorites(movie: any) {
    this.tmdbService.addToFavorites(movie);
  }
  

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/movie-db.service';
import { App } from 'src/app/modelos/app';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  title="Nombre pelicula";
  public pelicula: App = { title: "", popularity: "", id: "", url: "",backdrop_path: "", poster_path: "" };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.apiService.getTitle().subscribe(pelicula => (this.pelicula = pelicula));
  }

}

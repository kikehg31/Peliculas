import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/movie-db.service';
import { App } from 'src/app/modelos/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Nombre película";
  public peliculas: App[] = [];
  public pelicula: any;
  public mostrarDetalle: boolean = false;
  public keysArray: any;
  formData = {
    title: '',
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTitle().subscribe((data: any) => {
      this.peliculas = data.results;
    });

    this.apiService.getPage().subscribe((page: number) => {
      this.apiService.getTitle().subscribe((data: any) => {
        this.peliculas = data.results;
      });
    });
  }

  nextPage() {
    this.apiService.updatePage(this.apiService.page + 1);
  }

  beforePage() {
    if (this.apiService.page == 1) {
      this.apiService.updatePage(this.apiService.page);
    } else {
      this.apiService.updatePage(this.apiService.page - 1);
    }
  }

  onSubmit() {
    this.apiService.searchMovie(this.formData.title)
      .subscribe((data: any) => {
        this.peliculas = data.results;
      });
  }

  info(id: string) {
    const movie = this.peliculas.find(p => p.id === id);

    this.pelicula = movie;
    this.keysArray = Object.keys(this.pelicula)
    console.log(this.pelicula);
    this.mostrarDetalle = true;

  }
}

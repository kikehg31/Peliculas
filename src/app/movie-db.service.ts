import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { App } from './modelos/app';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = "https://api.themoviedb.org/3/discover/movie?api_key=775b8c9123881a12083c8dbe4bc89267&page=";
  private urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=775b8c9123881a12083c8dbe4bc89267&query=";
  private pageSubject = new Subject<number>();
  public page: number = 1;
  private u = "";
  private uInfo = "";

  constructor(private http: HttpClient) {}

  public getPage(): Observable<number> {
    return this.pageSubject.asObservable();
  }

  public updatePage(numPage: number) {
    this.page = numPage;
    this.pageSubject.next(this.page);
  }

  public getTitle(): Observable<App[]> {
    this.u = this.url + this.page;
    return this.http.get<App[]>(this.u);
  }

  public searchMovie(title: string) {
    this.u = this.urlSearch + title;
    return this.http.get<App[]>(this.u);
  }

  public getInfo(id:string): Observable<App[]> {

    this.uInfo = "https://api.themoviedb.org/3/movie/"+id+"?api_key=775b8c9123881a12083c8dbe4bc89267";
    console.log(this.uInfo);
    return this.http.get<App[]>(this.uInfo);
  }

}

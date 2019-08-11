import { Component, OnInit } from '@angular/core';
import { FilmService } from './service/film.service';
import { Film } from './model/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HTTPClient Demo';
  filmList: Film[] = [];
  newFilm: Film = new Film();
  filteringPhrase: string = '';
  orderKey: string = '';
  changeCounter: number = 0;
  orderDirection: number = 1;

  constructor(
    private filmService: FilmService
  ) {

  }

  onUpdate(film: any) {
    parseInt(film.release);
    this.filmService.update(film).subscribe(
      response => {
        console.log(film);
        this.changeCounter++;
      },
      err => console.log(err)
    )
  };

  onDelete(film: Film) {
    this.filmService.remove(film.id).subscribe(
      response => {
        let index = this.filmList.indexOf(film);
        this.filmList.splice(index, 1);
        this.changeCounter++;
      },
      err => console.log(err)
    )
  };

  onCreate() {
    this.filmService.create(this.newFilm).subscribe(
      film => {
        this.filmList.push(film);
        this.newFilm = new Film();
        this.changeCounter++;
      },
      err => console.log(err)
    );
  };

  ngOnInit() {
    this.filmService.getAll().subscribe(
      films => this.filmList = films
    )
  }

  setSorterKey(key: string): void {
    if (key === this.orderKey) {
      this.orderDirection = this.orderDirection == 1 ? -1 : 1;
    } else {
      this.orderDirection = 1;
    }
    this.orderKey = key;
  }
}

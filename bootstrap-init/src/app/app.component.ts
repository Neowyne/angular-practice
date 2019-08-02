import { Component } from '@angular/core';
import { Hero } from './model/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bootstrap Init & Component Interaction Demo';

  heroes: Hero[] = [
    { name: "Spiderman", address: "Queens, NY", superpower: "Spidey tingle" },
    { name: "Wolverine", address: "X-man Mansion", superpower: "Inhanced senses" },
    { name: "Deadpool", address: "Behind Wolverine", superpower: "Regeneration, supreme fighting skills" }
  ];

  selectedHero: Hero = this.heroes[0];

  selectHero(hero: Hero): void {
    this.selectedHero = hero;
  }

  heroChanged(hero: Hero): void {
    console.log('changed Hero: ', hero);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  selectedHero:any;
  heroes=[
  {id:1, name: "Hero 1"},
  {id:2, name: "Hero 2"},
  {id:3, name: "Hero 3"},
  {id:4, name: "Hero 4"},
  {id:5, name: "Hero 5"},
  {id:6, name: "meghana"},
  {id:7, name: "sagari"},
  {id:8, name: "sangavi"},
  {id:9, name: "swapna"},
  {id:10, name: "parimala"}
  ];
  onSelect(hero) {
    this.selectedHero = hero;
  }
}

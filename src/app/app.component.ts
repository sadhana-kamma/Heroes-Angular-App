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
  {id:1, name: "Person 1"},
  {id:2, name: "Person 2"},
  {id:3, name: "Person 3"},
  {id:4, name: "Person 4"},
  {id:5, name: "Person 5"},
  {id:6, name: "Person 6"},
  {id:7, name: "Person 7"},
  {id:8, name: "Person 8"},
  {id:9, name: "Person 9"},
  {id:10, name: "Person 10"}
  ];
  onSelect(hero) {
    this.selectedHero = hero;
  }
}

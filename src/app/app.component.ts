import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  selectedHero:any;
  heroes=[
  {id:1, name: "sadhana"},
  {id:2, name: "ramesh"},
  {id:3, name: "sathish"},
  {id:4, name: "vlakshmi"},
  {id:5, name: "padma"},
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

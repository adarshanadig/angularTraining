import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
     
  }
  heroes = [];
  
  addHero(newHero: string) {
    if (newHero) {
      let cat = new Category();
      cat.name = newHero;
      this.heroes.push(cat);
    }
  }

  onTextClick(hero: Category)
  {
    hero.selected = true;
    hero.group = hero.name + ' ' + 'selected';
  }
}


export class Category {
  
  name: string;
  group: string;
  selected:boolean;
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from './home/home.page';
import { Categorie } from './categorie/categorie';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}

  home: HomePage = new HomePage(this.router);
  // maListe: Fruit[]=[];
  listeCat: Categorie[]=[];

  fruitsCat(cat: Categorie){
    // localStorage.removeItem("cat");
    localStorage.setItem("cat",JSON.stringify(cat));
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.listeCat = this.home.listeCategories;
  }
}

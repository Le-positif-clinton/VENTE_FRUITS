import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Router } from '@angular/router';
import { Categorie } from './categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.page.html',
  styleUrls: ['./categorie.page.scss'],
})
export class CategoriePage implements OnInit {

  constructor(private router:Router) { }

  home: HomePage = new HomePage(this.router);
  catList: Categorie[] = [];
  ngOnInit() {
    this.catList = this.home.listeCategories;
  }


  fruitsCat(cat: Categorie){
    localStorage.setItem("cat",JSON.stringify(cat));
    this.router.navigate(['onglets/home']);
  }

}

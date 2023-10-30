import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';
import { Fruit } from './fruit';
import { Router } from '@angular/router';
import { Categorie } from '../categorie/categorie';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {

  constructor(private router: Router) { }
  home: HomePage = new HomePage(this.router);
  maListe: Fruit[]=[];
  listeCat: Categorie[]=[];
  prixAchat = 0;
  prixVente = 0;


  ngOnInit() {
    this.maListe = this.home.listeFruits;
    this.listeCat = this.home.listeCategories;

    this.maListe.forEach(fruit => {
      this.prixAchat += fruit.prix_achat*fruit.stock;
      this.prixVente += fruit.prix_vente*fruit.stock;
    });
    console.log(this.maListe)
  }

  fruitsCat(cat: Categorie){
    // localStorage.removeItem("cat");
    localStorage.setItem("cat",JSON.stringify(cat));
    this.router.navigate(['home']);
  }
}

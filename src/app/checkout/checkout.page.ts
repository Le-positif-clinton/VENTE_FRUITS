import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruits/fruit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(private router: Router) { }
  fruit!: Fruit;
  montant = 0;
  quantite = 0;

  ngOnInit() {
    let fruit = localStorage.getItem("fruitB");
    if(fruit != null){
      this.fruit = JSON.parse(fruit);
    }
  }

  remove(){
    if(this.quantite > 0){
      this.fruit.stock ++;
      this.quantite --;
      this.montant = this.quantite * this.fruit.prix_vente;
      
    }
  }
  add(){
    if(this.fruit.stock > 0){
      this.fruit.stock --;
      this.quantite ++;
      this.montant = this.quantite * this.fruit.prix_vente;
      
    }
  }

  valider(){
    localStorage.removeItem("cat");
    this.router.navigate(['onglets/home'])
  }
}

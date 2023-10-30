import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruits/fruit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {

  constructor(private router: Router) { }

  public fruitList: Fruit[] = [];
  ngOnInit() {
    this.getStorage();
    // this.refrech();
  }

  refrech(){
    this.getStorage();
    // this.router.navigate(['favoris']);
    this.router.navigate(['detail-fruit']);
  }
  getStorage(){
    // this.router.navigate(['onglets/favoris']);
    let fruit = localStorage.getItem("fav");
    if (fruit != null){
      this.fruitList.push(JSON.parse(fruit));
    }
  }

  detailFruit(fruit: Fruit){
    localStorage.setItem("fruit", JSON.stringify(fruit));
    this.router.navigate(['detail-fruit']);
  }

}

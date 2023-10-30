import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruits/fruit';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FavorisPage } from '../favoris/favoris.page';

@Component({
  selector: 'app-detail-fruit',
  templateUrl: './detail-fruit.page.html',
  styleUrls: ['./detail-fruit.page.scss'],
})
export class DetailFruitPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, private router: Router) { }

  favoris:FavorisPage = new FavorisPage(this.router);

  fruit: any;
  ngOnInit() {
    let fruit = localStorage.getItem("dfruit");
    if(fruit != null){
      this.fruit = JSON.parse(fruit);
    }
    localStorage.removeItem("dfruit");
  }

  async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
  header: 'Actions',
    buttons: [
    {
      text: 'Ajouter aux Favoris',
      icon: 'heart',
      handler: () => { 
        console.log('favorite clicked'); 
        localStorage.setItem("fav",JSON.stringify(this.fruit));
        this.favoris.refrech();
        // this.router.navigate(['onglets/favoris']);
        // this.router.navigate(['detail-fruit']);
      }
    }, {
      text: 'Acheter',
      icon: 'add',
      handler: () => {
          console.log('Buy clicked'); 
          localStorage.setItem("fruitB",JSON.stringify(this.fruit))
          this.router.navigate(['checkout']);
        }
    }, {
        text: 'Pas intéressé',
        icon: 'close',
        role: 'destructive',
        handler: () => { 
          this.router.navigate(['onglets/home']);
        }
    }, {
      text: 'Annuler',
      role: 'destructive',
      icon: 'trash',
      handler: () => { console.log('Cancel clicked'); }
    }
    ]
  });
  await actionSheet.present();
  const { role } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
  }

  
}

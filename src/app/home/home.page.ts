import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruits/fruit';
import { Categorie } from '../categorie/categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  fruit_a_pepins:Categorie = new Categorie(1,"Fruit à pépins","darkgreen");
  fruit_tropical:Categorie = new Categorie(2,"Fruit tropical","yellow");
  agrume:Categorie = new Categorie(3,"Agrume","blue");
  baie:Categorie = new Categorie(4,"Baie","aqua");
  fruit_exotique = new Categorie(5,"Fruit exotique","chartreuse");
  fruit_a_noyau = new Categorie(6,"Fruit à noyau","brown");
  fruit_sec = new Categorie(7,"Fruit sec","bisque");
  

  listeCategories: Categorie[] = [this.fruit_a_noyau,this.fruit_exotique,this.fruit_a_pepins,this.agrume,this.baie,this.fruit_tropical,this.fruit_sec];

  avocat = new Fruit(0,"Avocat","l'avocat est un fruit tres connu pour etre le meilleur fruits des Mbouda au cameroun, il est riche en graisses mono-insaturées et en nutriments tels que la vitamine K et le potassium.",100,500,this.fruit_a_noyau,1500,'../../assets/fruits/avocat.png');
  ananas:Fruit = new Fruit(1,"Ananas","L'ananas est un fruit tropical avec une écorce épineuse et une chair jaune sucrée. Il est riche en vitamine C et en bromélaïne, une enzyme digestive.",300,800,this.fruit_tropical,50,'../../assets/fruits/ananas.png');
  pomme:Fruit = new Fruit(2,"Pomme","La pomme est un fruit croquant et juteux, disponible dans une variété de couleurs telles que rouge, verte et jaune. Elle est riche en fibres et en vitamine C",50,100,this.fruit_a_pepins,15,'../../assets/fruits/pomme.png');
  banane:Fruit = new Fruit(3,"Banane","La banane est un fruit allongé et courbé, avec une peau jaune. Elle est riche en potassium et en vitamine B6, et est une excellente source d'énergie.",50,100,this.fruit_tropical,30,'../../assets/fruits/banane.png');
  orange:Fruit = new Fruit(4,"Orange"," L'orange est un fruit juteux et acidulé, souvent de couleur orange. Elle est une excellente source de vitamine C et de fibres.",75,100,this.agrume,45,'../../assets/fruits/orange.png');
  raisin:Fruit = new Fruit(5,"Raisin","Le raisin est un fruit en grappes, généralement de couleur rouge ou verte. Il est riche en antioxydants et en sucres naturels.",300,500,this.fruit_a_pepins,8,'../../assets/fruits/raisin.png');
  fraise:Fruit = new Fruit(6,"Fraise","La fraise est un fruit rouge brillant et sucré, avec une texture douce. Elle est riche en vitamine C et en antioxydants.",600,1000,this.baie,19,'../../assets/fruits/fraise.png');
  kiwi = new Fruit(7,"Kiwi","Le kiwi est un fruit brun velu avec une chair verte et acidulée. Il est riche en vitamine C et en fibres.",150,300,this.fruit_exotique,30,'../../assets/fruits/kiwi.png');
  papaye = new Fruit(8,"Papaye","La papaye est un fruit tropical en forme de poire, avec une chair orange juteuse. Elle est riche en vitamine C et en enzymes digestives.",250,400,this.fruit_tropical,15,'../../assets/fruits/papaye.png');
  mangue = new Fruit(9,"Mangue","La mangue est un fruit juteux avec une peau colorée et une chair orange douce. Elle est riche en vitamine C et en fibres.",50,100,this.fruit_tropical,550,'../../assets/fruits/mangue.png');
  citron = new Fruit(10,"Citron","Le citron est un fruit jaune acide, utilisé pour son jus et son zeste. Il est riche en vitamine C et en antioxydants.",50,100,this.agrume,452,'../../assets/fruits/citron.png');
  pamplemousse = new Fruit(11,"Pamplemousse","Le pamplemousse est un fruit citronné et légèrement amer, souvent consommé au petit-déjeuner. Il est riche en vitamine C et en fibres.",400,600,this.agrume,21,'../../assets/fruits/pamplemousse.png');
  cerise = new Fruit(12,"Cerise","La cerise est un petit fruit rouge ou noir, avec une chair sucrée et juteuse. Elle est riche en antioxydants et en fibres.",250,500,this.fruit_a_noyau,75,'../../assets/fruits/cerise.png');
  poire = new Fruit(13,"Poire","La poire est un fruit juteux et sucré, disponible dans une variété de couleurs et de saveurs. Elle est riche en fibres et en vitamine C.",450,800,this.fruit_a_pepins,45,'../../assets/fruits/poire.png');
  peche = new Fruit(14,"Pêche","La pêche est un fruit juteux avec une peau veloutée et une chair sucrée. Elle est riche en vitamines A et C, ainsi qu'en fibres.",250,500,this.fruit_a_noyau,155,'../../assets/fruits/peche.png');
  Nectarine = new Fruit(15,"Nectarine","La nectarine est un fruit semblable à la pêche mais avec une peau lisse. Elle est riche en vitamines A et C, et en antioxydants.",275,550,this.fruit_a_noyau,87,'../../assets/fruits/nectarine.png');
  Prune = new Fruit(16,"Prune","La prune est un fruit rond ou ovale, généralement de couleur violette ou jaune. Elle est riche en fibres, en vitamines",25,50,this.fruit_a_noyau,459,'../../assets/fruits/prune.png');
  Framboise = new Fruit(17,"Framboise","fruit à pulpe rouge et sucrée, catégorie des fruits rouges, originaire d'Europe, riche en vitamine C, en fibres et en antioxydants.",200,400,this.fruit_exotique,95,'../../assets/fruits/framboise.png');
  Mûre = new Fruit(18,"Mûre","fruit à pulpe noire et sucrée, catégorie des fruits rouges, originaire d'Europe, riche en vitamine C, en fibres et en antioxydants.",150,400,this.fruit_exotique,45,'../../assets/fruits/mure.png');
  Pastèque = new Fruit(19,"Pastèque","ruit à pulpe juteuse et sucrée, catégorie des fruits d'été, originaire d'Afrique, riche en vitamine C, en bêta-carotène et en fibres.",400,1000,this.fruit_a_pepins,75,'../../assets/fruits/pasteque.png');
  Fruit_de_la_passion = new Fruit(20,"Fruit de la passion", "fruit à pulpe jaune et acidulée, catégorie des fruits exotiques, originaire d'Amérique du Sud, riche en vitamine C, en bêta-carotène et en fibres.",50,100,this.fruit_exotique,200,'../../assets/fruits/fdlpassion.png');
  Grenadille = new Fruit(21, "Grenadille", "ruit à pulpe rouge et acidulée, catégorie des fruits exotiques, originaire d'Amérique du Sud, riche en vitamine C, en bêta-carotène et en fibres.",300,500,this.fruit_exotique,125,'../../assets/fruits/grenadille.png');
  Noix_de_coco = new Fruit(22,"Noix de coco", "fruit à pulpe blanche et juteuse, originaire d'Asie du Sud-Est, riche en fibres, en acides gras saturés et en potassium.",200,500,this.fruit_exotique,256,'../../assets/fruits/ndcoco.png');
  Noix = new Fruit(23,"Noix","fruit à coque, catégorie des fruits secs, originaire d'Asie centrale, riche en protéines, en graisses mono-insaturées et en magnésium.",150,400,this.fruit_sec,6,'../../assets/fruits/noix.png');
  Amande = new Fruit(24, "Amande", "fruit à coque, catégorie des fruits secs, originaire du Moyen-Orient, riche en protéines, en graisses mono-insaturées et en magnésium.", 200,400,this.fruit_sec,54,'../../assets/fruits/amande.png');
  Pistache = new Fruit(25, "Pistache", "uit à coque, catégorie des fruits secs, originaire d'Asie occidentale, riche en protéines, en graisses mono-insaturées et en potassium.",500,1500,this.fruit_sec,96,'../../assets/fruits/pistache.png');
  Noisette = new Fruit(26,"Noisette", "fruit à coque, catégorie des fruits secs, originaire d'Europe, riche en protéines, en graisses mono-insaturées et en magnésium.",25,75,this.fruit_sec,850,'../../assets/fruits/noisette.png');
  Plantain = new Fruit(27,"Plantain", "fruit à pulpe ferme, catégorie des fruits tropicaux, originaire d'Afrique, riche en fibres et en potassium.",100,200,this.fruit_tropical,400,'../../assets/fruits/plantain.png');
  Baobab = new Fruit(28,"Baobab", "fruit à pulpe sèche et acidulée, catégorie des fruits exotiques, originaire d'Afrique, riche en vitamine C, en fibres et en antioxydants.", 150,250,this.fruit_exotique,87,'../../assets/fruits/baobab.png');
  Djansang = new Fruit(29, "Djansang", "fruit à pulpe ferme et acidulée, catégorie des fruits exotiques, originaire d'Afrique, riche en vitamine C, en bêta-carotène et en fibres.", 500,1000,this.fruit_exotique,63, '../../assets/fruits/djansang.png');
  Corossol = new Fruit(30,"Corossol", "fruit à pulpe blanche et crémeuse, catégorie des fruits exotiques, originaire d'Afrique, riche en vitamine C, en fibres et en antioxydants.",300,800,this.fruit_exotique,152,'../../assets/fruits/corossol.png');
  Goyave = new Fruit(31,"Goyave", "fruit à pulpe rose et sucrée, catégorie des fruits exotiques, originaire d'Amérique centrale et du Sud, riche en vitamine C, en bêta-carotène et en fibres.", 50, 100, this.fruit_exotique, 580, '../../assets/fruits/goyave.png');
  Safou = new Fruit(32, "Safou", " fruit à pulpe grasse et crémeuse, catégorie des fruits exotiques, originaire d'Afrique, riche en graisses mono-insaturées et en vitamine C.", 200, 300, this.fruit_exotique, 200, '../../assets/fruits/safou.png');
  Mangue_sauvage = new Fruit(33, "Mangue sauvage", "fruit à pulpe douce et juteuse, catégorie des fruits exotiques, originaire d'Afrique, riche en vitamine C, en bêta-carotène et en fibres.", 50, 100, this.fruit_exotique, 259, '../../assets/fruits/msauvage.png')
  Tamarinier = new Fruit(34, "Tamarinier", "fruit à pulpe brune et acidulée, catégorie des fruits exotiques, originaire d'Afrique, riche en vitamine C, en fibres et en antioxydants.", 200, 300, this.fruit_exotique, 275, '../../assets/fruits/tamarinier.png');

  listeFruits: Fruit[]=[this.avocat,this.ananas,this.pomme,this.banane,this.orange,this.raisin,this.fraise,this.kiwi,this.papaye,this.mangue,this.citron,this.pamplemousse,this.cerise,this.poire,
  this.peche,this.Nectarine,this.Prune,this.Framboise,this.Mûre,this.Pastèque,this.Fruit_de_la_passion,
  this.Grenadille,this.Noix_de_coco, this.Noix, this.Amande,this.Pistache,this.Noisette,this.Plantain,this.Baobab,this.Djansang,this.Corossol, this.Goyave,this.Safou,this.Mangue_sauvage,this.Tamarinier];

  constructor(private router: Router) {}
  tabFrui: Fruit[] = [];
  

  // detailFruit(catNom:string){
  //   let fruitCat: Fruit[]= [];
  //   this.listeFruits.forEach(fruit => {
  //     if(fruit.categorie.nom == catNom){
  //       fruitCat.push(fruit);
  //     }
  //     // console.log (fruitCat);
  //     this.tabFrui = fruitCat;
  //     // console.log (this.tabFrui);
  //   });
    
  // }
  detailFruit(fruit: Fruit){
    localStorage.setItem("dfruit", JSON.stringify(fruit));
    this.router.navigate(['detail-fruit'])
  }

  ngOnInit(): void {
    // localStorage.removeItem("cat");
    let cat = localStorage.getItem("cat");
    if (cat != null){
      let ncat:Categorie = JSON.parse(cat);
      let tabCat: Fruit[]=[];
      this.listeFruits.forEach(fruit => {
        
        if(fruit.categorie.nom == ncat.nom){
          tabCat.push(fruit);
        }
      });
      this.listeFruits = tabCat;
      
    }
  }

}

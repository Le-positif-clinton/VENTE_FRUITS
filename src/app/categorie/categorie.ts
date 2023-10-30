import { Fruit } from "../fruits/fruit";

export class Categorie{
    id!: number;
    nom!: string;
    couleur!: string;
    fruits!: Fruit[];
    
    constructor(id: number, nom: string, couleur: string){
        this.id = id;
        this.nom = nom;
        this.couleur = couleur;
    }

    addFruit(fruit: Fruit){
        this.fruits;
    }
}
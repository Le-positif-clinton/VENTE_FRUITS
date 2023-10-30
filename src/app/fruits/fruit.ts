import { Categorie } from "../categorie/categorie";

export class Fruit{
    id!: number;
    nom!: string;
    description!: string;
    prix_achat!: number;
    prix_vente!: number;
    categorie!: Categorie;
    stock!: number;
    image!: string;

    constructor(id: number, nom: string, description: string, prix_achat: number, prix_vente: number, categorie: Categorie, stock: number, image: string){
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.prix_achat = prix_achat;
        this.prix_vente = prix_vente;
        this.categorie = categorie;
        this.stock = stock;
        this.image = image;
    }

}
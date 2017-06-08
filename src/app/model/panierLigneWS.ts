export class PanierLigneWS{

    id : number;
    idCommande : number;
    idProduit : number;
    quantite : number;
    prix : number;

    constructor(id : number = 0, 
                idCommande : number = 0,
                idProduit : number,
                quantite : number = 0,
                prix : number
                ){
        this.id = id;
        this.idCommande = idCommande;
        this.prix = prix;
        this.quantite = quantite;
        this.idProduit = idProduit;
     } 

}
import { Component, OnInit } from '@angular/core'; 
import { PanierService } from "app/service/panier.service";
import { PanierLigneWS } from "app/model/panierLigneWS";
import { PanierLigneAff } from "app/model/panierLigneAff";

// @Component pour déclarer notre composant avec un sélector, un template html et un styleUrl
@Component({
  selector: 'panier-component',
  templateUrl: './panier.component.html', // precise le chemin vers le template
  styleUrls: ['./panier.component.css'] // precise le chemin vers le css
})

export class PanierComponent {
    // // 10.2.4 creer @Input () item qu'on va pouvoir utiliser comme référence dans le template app.component.html
    // @Input() item: Item; // on crée une entité réutilisable dans d'autres composants

    private panierForWS : Array <PanierLigneWS>;
    private panierForAff : Array <PanierLigneAff>;
    
    constructor(private _panierService : PanierService){ 
    } // _produitService est injecté ici via angular

    ngOnInit(): void {     
       this.panierForWS = this._panierService.getForWS();
       this.panierForAff = this._panierService.getForAff();
    }

    private viderPanier() : void {
       this._panierService.vider();
       this.panierForWS = this._panierService.getForWS();
       this.panierForAff = this._panierService.getForAff();
    }

}
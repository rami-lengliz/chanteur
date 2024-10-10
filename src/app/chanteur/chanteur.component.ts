import { Component } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-chanteur',
  templateUrl: './chanteur.component.html'
})
export class ChanteurComponent {
    chanteur : Chanteur[];
    constructor( private chanteurService : ChanteurService ) { 
      this.chanteur = chanteurService.listeGames();
    }
    supprimerChanteur(g: Chanteur){
      // console.log(g);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.chanteurService.supprimerChanteur(g);
    }
}

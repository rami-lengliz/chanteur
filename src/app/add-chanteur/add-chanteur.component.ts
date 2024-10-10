import { Component } from '@angular/core';
import { Chanteur } from '../model/chanteur.model';
import { ChanteurService } from '../services/chanteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-chanteur',
  templateUrl: './add-chanteur.component.html'
})
export class AddChanteurComponent {
  newChanteur = new Chanteur();
  constructor(  private chanteurService : ChanteurService,
                private router : Router) {}
  addChanteur(){
    // console.log(this.newChanteur);
    this.chanteurService.ajouterChanteur(this.newChanteur);
    this.router.navigate(['chanteur']);
    }
}

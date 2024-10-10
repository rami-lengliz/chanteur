import { Component } from '@angular/core';
import { chanteur } from '../model/chanteur.model';
import { ActivatedRoute, Router } from '@angular/router';
import { chanteurService } from '../services/chanteur.service';

@Component({
  selector: 'app-update-chanteur',
  templateUrl: './update-chanteur.component.html'
})
export class UpdateChanteurComponent {
  currentGame = new chanteur();
  constructor ( private activatedRoute : ActivatedRoute,  
                private router : Router,
                private chanteurService : chanteurService) { }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentchanteur = this.chanteurService.consulterChanteur(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentchanteur);
  }
  updateChanteur(){ 
    //console.log(this.currentchanteur);
    this.chanteurService.updateChanteur(this.currentchanteur);
    this.router.navigate(['chanteur']);
    }
}


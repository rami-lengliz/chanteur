import { Injectable } from '@angular/core';
import { chanteur } from '../modele/chanteur.model';

@Injectable({
  providedIn: 'root'
})
export class ChanteurService {
  chanteur : Chanteur[];

  constructor() {
    this.chanteur = [
      {idChanteur : 1, nomChanteur : "sicco mode", prixChanteur : 17.5, dateCreation : new Date("07/8/2018")},
      {idChanteur : 2, nomChanteur : "dima dima ", prixChanteur : 17.5 , dateCreation : new Date("01/15/2022")},
      {idChanteur : 3, nomChanteur : "fasateen", prixChanteur : 17.5 , dateCreation : new Date("05/1/2021")},
    ];
   }
}listeChanteur():Chanteur[] {
  return this.chanteur;
}
ajouterChanteur(g : chanteur){
  this.chanteur.push(g);
}
supprimerChanteur(g : chanteur){
    const index = this.chanteur.indexOf(g, 0);
    if (index > -1) {
    this.chanteur.splice(index, 1);
  }
}
consulterChanteur(id:number): Game{
  return this.chanteur.find(g => g.idChanteur == id)!;
}
trierChanteur(){
  this.chanteur = this.chanteur.sort((n1,n2) => {
  if (n1.idChanteur! > n2.idChanteur!) {
  return 1;
  }
  if (n1.idChanteur! < n2.idChanteur!) {
  return -1;
  }
  return 0;
  });
}
updateChanteur(g : chanteur){
  // console.log(p);
  this.supprimerChanteur(g);
  this.ajouterChanteur(g);
  this.trierChanteur();
}
}


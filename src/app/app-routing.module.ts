import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';

const routes: Routes = [
  { path : "chanteur" , component : ChanteurComponent },
  { path : "add-chanteur" , component : AddChanteurComponent },
  { path : "updateChanteur/:id" , component : UpdateChanteurComponent },
  { path : "" , redirectTo : "chanteur" , pathMatch : "full" }
];

@NgModule({
  declarations: [RouterModule.forRoot(routes)],
  imports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

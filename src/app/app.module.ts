import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChanteurComponent } from './chanteur/chanteur.component';
import { AddChanteurComponent } from './add-chanteur/add-chanteur.component';
import { FormsModule } from '@angular/forms';
import { UpdateChanteurComponent } from './update-chanteur/update-chanteur.component';

@NgModule({
  declarations: [
    AppComponent,
    ChanteurComponent,
    AddChanteurComponent,
    UpdateChanteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

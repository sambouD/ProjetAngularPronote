import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NationaliteListComponent } from './nationalite-list/nationalite-list.component';
import { AssociationListComponent } from './association-list/association-list.component';
import { EleveListComponent } from './eleve-list/eleve-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NationaliteListComponent,
    AssociationListComponent,
    EleveListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

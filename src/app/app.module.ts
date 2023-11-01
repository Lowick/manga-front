import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ProduitListComponent } from './components/produit-list/produit-list.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './components/update/update.component';
import { Pages404Component } from './pages/pages404/pages404.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ProduitListComponent,
    PageHomeComponent,
    PageAdminComponent,
    CreateComponent,
    ConnexionComponent,
    UpdateComponent,
    Pages404Component
  ],
  imports: [
      ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { Pages404Component } from './pages/pages404/pages404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
   { path: 'admin', component: PageAdminComponent },
   {path:'login', component: ConnexionComponent},
   {path:'create', component: CreateComponent},
   {path:'update', component: UpdateComponent},
   {path: '**', component: Pages404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

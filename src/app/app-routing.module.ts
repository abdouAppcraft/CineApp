import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { ArticlesComponent } from './articles/articles.component';
import { FichesComponent } from './fiches/fiches.component';
import { FicheComponent } from './fiche/fiche.component';
import { AjoutficheComponent } from './ajoutfiche/ajoutfiche.component';
import { ProfilComponent } from './profil/profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/:idArticle',
    component: ArticlesComponent
  },
  {
    path: 'fiches',
    component: FichesComponent
  },
  {
    path: 'fiches/:idFiche',
    component: FicheComponent
  },
  {
    path: 'ajoutFiche',
    component: AjoutficheComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

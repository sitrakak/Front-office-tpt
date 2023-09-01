import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { EGouvernanceComponent } from './e-gouvernance/e-gouvernance.component';
import { CreateInfosComponent } from './e-gouvernance/infos/create-infos/create-infos.component';
import { FicheInfosComponent } from './e-gouvernance/infos/fiche-infos/fiche-infos.component';
import { ListeInfosComponent } from './e-gouvernance/infos/liste-infos/liste-infos.component';
import { AjoutMembreComponent } from './e-gouvernance/membres-gouvernement/ajout-membre/ajout-membre.component';
import { ListeMembreComponent } from './e-gouvernance/membres-gouvernement/liste-membre/liste-membre.component';
import { ModifierMembreComponent } from './e-gouvernance/membres-gouvernement/modifier-membre/modifier-membre.component';
import { CreateProjetComponent } from './e-gouvernance/projet/create-projet/create-projet.component';
import { DetailsProjetComponent } from './e-gouvernance/projet/details-projet/details-projet.component';
import { ListeProjetComponent } from './e-gouvernance/projet/liste-projet/liste-projet.component';
import { ModifierProjetComponent } from './e-gouvernance/projet/modifier-projet/modifier-projet.component';
import { InscriptionComponent } from './user/inscription/inscription.component';
import { DetailsEtapeComponent } from './e-gouvernance/projet/details-etape/details-etape.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'sign-in',
    component: InscriptionComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'e-gouvernance',component: EGouvernanceComponent,
    children: [
      {path:'',component:AccueilComponent},
      {path:'create-infos',component:CreateInfosComponent},
      {path:'liste-infos',component:ListeInfosComponent},
      {path:'modifier-infos/:id',component:ModifierMembreComponent},
      {path:'fiche-infos/:id',component:FicheInfosComponent},


      {path:'create-membre-gouvernement',component:AjoutMembreComponent},
      {path:'liste-membre-gouvernement',component:ListeMembreComponent},
      {path:'modifier-membre-gouvernement/:id',component:ModifierMembreComponent},

      {path:'create-projet',component:CreateProjetComponent},
      {path:'liste-projet',component:ListeProjetComponent},
      {path:'modifier-projet',component:ModifierProjetComponent},
      {path:'details-projet/:id',component:DetailsProjetComponent},

      {path:'details-etape/:id',component:DetailsEtapeComponent},
      
      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

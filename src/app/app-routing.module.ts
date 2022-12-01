import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './Etudiant/add-etudiant/add-etudiant.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { AddContratComponent } from './contrat/add-contrat/add-contrat.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './Services/user.guard';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';

const routes: Routes = [
  {path: '', component:ContentComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate:[UserGuard],
    children:[
         { path:'list-etudiant',component: ListEtudiantComponent},
         { path:'list-contrat',component: ListContratComponent},
         {path:'add-etudiant', component:AddEtudiantComponent},
         { path:'update-etudiant/:id', component:UpdateEtudiantComponent},
         {path:'profile', component:ProfileComponent},
         {path:'add-contrat', component:AddContratComponent},


         { path:'list-equipe',component: ListEquipeComponent},
         { path:'add-equipe',component: AddEquipeComponent},
        // {path:'add-etudiant', component:AddEtudiantComponent}

        ]},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

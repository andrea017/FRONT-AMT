import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewHySComponent } from './componentes/hys/new-hy-s.component';
import { EditHySComponent } from './componentes/hys/edit-hy-s.component';
import { EditAcercadeComponent } from './componentes/acercade/edit-acercade.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path:'editexp/:id', component:EditExperienciaComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id', component:EditEducacionComponent},
  {path:'nuevaskill', component:NewHySComponent},
  {path:'editskill/:id', component:EditHySComponent},
  {path:'editper/:id', component:EditAcercadeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

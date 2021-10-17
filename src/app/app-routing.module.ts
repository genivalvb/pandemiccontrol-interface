import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';

const routes: Routes = [
  { path: 'pacientes', component: PacienteListComponent },
  { path: '', redirectTo: 'pacientes', pathMatch: 'full'},
  { path: 'paciente-details/um/:id', component: PacienteDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

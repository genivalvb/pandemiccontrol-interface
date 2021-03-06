import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { PacienteDetailsComponent } from './paciente-details/paciente-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PacienteListComponent,
    PacienteDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "https://pandemicontrol.herokuapp.com/api/v1/pacientes/";

  constructor(private httpClient: HttpClient) { }

  getPacientesList(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`);
  }
}

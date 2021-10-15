import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map , retry} from 'rxjs/operators';
import { Paciente } from './model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "https://pandemicontrol.herokuapp.com/api/v1/pacientes";
  //private baseURL = "http://localhost:8080/api/v1/pacientes"

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getPacientesList(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`)
      .pipe(
        retry(2),
        catchError(this.handleError('getPacientesList', []))
        );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}

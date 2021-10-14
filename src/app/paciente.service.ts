import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Paciente } from './model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private baseURL = "https://pandemicontrol.herokuapp.com/api/v1/pacientes";

  constructor(private httpClient: HttpClient) { }

  getPacientesList(): Observable<Paciente[]>{
    return this.httpClient.get<Paciente[]>(`${this.baseURL}`)
      .pipe(
        tap(pacientes => console.log('leu os pacientes')),
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

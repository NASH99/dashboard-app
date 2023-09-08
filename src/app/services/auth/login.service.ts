import { Injectable } from '@angular/core';
import { LoginRequest } from './loginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(credentials:LoginRequest):Observable<User>{
    return this.http.get<User>('././assets/data.json')
  }

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.log('Se ha producido un error', error.error);
    }else{
      console.error('Backend retorno el codigo de estado', error.status, error.error);
    }
    //return throwError((=> new Error('Algo fallo. Por favor intente nuevamente')));
  }
}

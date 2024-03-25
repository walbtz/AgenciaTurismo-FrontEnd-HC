import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../class/login';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlBase = "https://localhost:8080/login";
  constructor(private clienteHttp: HttpClient) { }

  obtenerUsuarios(): Observable<Login[]>{
    return this.clienteHttp.get<Login[]>(this.urlBase);
  }

  enviarCredenciales(login: Login): Observable<Object>{
    //Devolver el empleado según el login
    return this.clienteHttp.post(this.urlBase, login);
  }
}
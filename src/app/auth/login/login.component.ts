import { Component } from '@angular/core';
import { Login } from '../../class/login';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuarios: Login[];
  credecialesLogin: Login;
  userExist: boolean = false;

  constructor(private loginService: LoginService){}

  onSubmit(){
    this.loginService.enviarCredenciales;
  }

  ngOnInit(){
    this.obtenerCredenciales();

  }

  obtenerCredenciales(){
    this.loginService.obtenerUsuarios().subscribe(
      (datos => {
        this.usuarios = datos;
      })
    );
  }
}

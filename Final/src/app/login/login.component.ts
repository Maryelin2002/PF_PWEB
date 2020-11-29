import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public url: string
  public email: string;
  public password: string;
  public data: any;
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private _http: HttpClient,
     private _builder: FormBuilder) {
      this.url = "http://localhost:8000"; // http://127.0.0.1:8000
      this.data = false;
      this.loginForm = this._builder.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
      })
     }

  ngOnInit(): void {
  }

  
  IniciarSesion(){
    this._http.get(`${this.url}/logInDoctor/${this.email},${this.password}`).subscribe(
      result => {
        this.data = result
        if (this.data.LogIn) {
          Swal.fire(
            'Bienvenido!',
            'Usted puede ingresar a esta aplicacion',
            'success'
          )
          this.router.navigate(["/pagina"]);
        }
        else{
          Swal.fire(
            ' ERROR!',
            'CORREO O CONTRASEÑA INCORRECTA',
            'error'
          )
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }

 

}

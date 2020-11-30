import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  url:any;
  data:any;

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
   }

  ngOnInit() {
  }

  Cerrar(){
    this.http.get(`${this.url}/logOut`).subscribe(
      result => {
        this.data = result;
        console.log(this.data);
      }
    )
    this.router.navigate(["home"]);
  }

  Paciente(){
    this.router.navigate(["paciente"]);
  }

  Consulta(){
    this.router.navigate(["consulta"]);
  }

  Zodiaco(){
    this.router.navigate(["zodiaco"]);
  }

  Fecha(){
    this.router.navigate(["fecha"]);
  }

  Visitas(){
    this.router.navigate(["visitas"]);
  }

  ActualizarPaciente(){
    this.router.navigate(["updatepaciente"])
  }

  ActualizarConsulta(){
    this.router.navigate(["updateconsulta"])
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  Cerrar(){
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

}

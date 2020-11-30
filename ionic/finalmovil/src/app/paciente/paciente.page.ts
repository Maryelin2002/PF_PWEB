import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  Cedula: string;
  Nombre: string;
  Apellido: string;
  TipoDeSangre: string;
  Genero: string;
  Fecha: string;
  Alergias: string;
  Foto: string;
  Correo: string;
  url: any;
  data: any;

  constructor(private router: Router, private http: HttpClient) { 
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
  }

  ngOnInit() {
  }

  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }
  
  Menu(){
    this.router.navigate(["principal"])
  }

  registrarPatient(){
    this.http.get(`${this.url}insertPatient/${this.Cedula},${this.Foto},${this.Nombre},${this.Apellido},${this.TipoDeSangre},${this.Correo},${this.Genero},${this.Fecha},${this.Alergias}`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);
        console.log(this.Cedula);
        if(this.data.Cedula == this.Cedula){
          console.log("Paciente registrado");

        }else{
          console.log("No fue posible insertar paciente");
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.page.html',
  styleUrls: ['./consulta.page.scss'],
})
export class ConsultaPage implements OnInit {

  Patient: string;
  Date: string;
  Motivo: string;
  Seguro: string;
  Monto: string;
  Diagnostico: string;
  Nota: string;
  Foto: string;
  url: any;
  data: any;

  constructor(private router: Router, private http: HttpClient) { 
    this.url = 'http://127.0.0.1:8000/';
    this.data = false;
  }


  ngOnInit() {
  }

  Menu(){
    this.router.navigate(["principal"]);
  }

  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }

  registrarConsulta(){
    this.http.get(`${this.url}insertConsult/${this.Patient},${this.Date},${this.Motivo},${this.Seguro},${this.Monto},${this.Diagnostico},${this.Nota},${this.Foto}`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);

        if(this.data.Amount != null){
          console.log("Consulta registrada");

        }else{
          console.log("No fue posible registrar consulta");
        }
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

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
  ConsultaForm: FormGroup;

  constructor(private router: Router, private http: HttpClient, private _builder: FormBuilder) { 
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.ConsultaForm = this._builder.group({
      paciente: ['',Validators.required],
      fecha: ['',Validators.required],
      motivo: ['',Validators.required],
      seguro: ['',Validators.required],
      monto: ['',Validators.required],
      diagnostico: ['',Validators.required],
      nota: ['',Validators.required],
      evidencia: ['',Validators.required]
    })
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
    this.http.get(`${this.url}/insertConsult/${this.Patient},${this.Date},${this.Motivo},${this.Seguro},${this.Monto},${this.Diagnostico},${this.Nota},${this.Foto}`).subscribe(
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

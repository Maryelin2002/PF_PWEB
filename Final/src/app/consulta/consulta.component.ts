import { Component, OnInit, SimpleChanges} from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  public url: string;
  public paciente:string;
  public fecha:string;
  public motivo:string;
  public seguro:string;
  public monto: number;
  public diagnostico:string;
  public evidencia:string;
  public nota:string;
  public data:any;
  public datas: any;
  public nombres: Array<JSON>;
  public formConsulta: FormGroup;

  constructor(private _http: HttpClient, private _builder: FormBuilder) {
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
    this.data = false;
    this.datas = false;
    this.nombres = [];
    this.formConsulta = this._builder.group({
      paciente: ['', Validators.required],
      fecha: ['', Validators.required],
      motivo: ['', Validators.required],
      seguro: ['',Validators.required],
      monto: ['', Validators.required],
      diagnostico: ['', Validators.required],
      nota: ['', Validators.required],
      evidencia: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.Cleaning();
    // this.Nombres();
  }

  Cleaning(): void{
    this.paciente = "";
    this.fecha = "";
    this.motivo = "";
    this.seguro = "";
    this.diagnostico = "";
    this.nota = "";
    this.evidencia = "";
    this.data = false;
  }

  // ngOnChanges(changes: SimpleChanges):void{
  //   this.Nombres();
  //  }

  //  Nombres(): void{
  //   this.nombres = [];
  //   this._http.get(`${this.url}/selectPatientsName`).subscribe(
  //     result => {
  //       this.datas = result;
  //       if (this.datas.Name0 != {}){
  //         for (let k in this.datas.Name0){
  //           this.nombres.push(this.datas.Name0[k]);
           
  //         }
  //       }
  //       else{
  //         this.nombres = [];
         
  //       }
  //     },
  //     error => {
  //       alert("Not exists in database!\n" + <any>error);
  //     }
  //   );
  // }


  RegistrarConsulta(){
    if(this.paciente != "" && this.fecha != "" && this.motivo != "" && this.seguro != ""  &&
    this.diagnostico != "" && this.nota != "" && this.evidencia != "" ){
      this._http.get(`${this.url}/insertConsult/${this.paciente},${this.fecha},${this.motivo},${this.seguro},${this.monto},${this.diagnostico},${this.nota},${this.evidencia}`).subscribe(
        result => {
          this.data = result
          if (this.data.Patient.Name = this.paciente) {
            Swal.fire(
              'Excelente!',
              'Consulta registrada sin problemas',
              'success'
            )
            this.Cleaning();
          }
          else{
            Swal.fire(
              ' ERROR!',
              'VERIFICAR DATOS',
              'error'
            )
          }
        },
        error => {
          alert("Not exists in database!\n" + <any>error);
        }
      );
    }  
    else{
      Swal.fire(
        ' ERROR!',
        'CAMPOS VACIOS',
        'error'
      )
    }
  }




}

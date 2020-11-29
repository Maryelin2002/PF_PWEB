import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-updateconsulta',
  templateUrl: './updateconsulta.component.html',
  styleUrls: ['./updateconsulta.component.css']
})
export class UpdateconsultaComponent implements OnInit {

  public url: string;
  public id: number;
  public paciente:string;
  public fecha:string;
  public motivo:string;
  public seguro:string;
  public monto: number;
  public diagnostico:string;
  public evidencia:string;
  public nota:string;
  public data:any;
  public manageBody: boolean;

  constructor(private _http: HttpClient) { 
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
    this.data = false;
    this.manageBody = false;
  }

  ngOnInit(): void {
    this.Cleaning();
  }

  Cleaning(): void{
    this.id = null;
    this.paciente = "";
    this.fecha = "";
    this.motivo = "";
    this.seguro = "";
    this.monto = null;
    this.diagnostico = "";
    this.nota = "";
    this.monto = null;
    this.evidencia = "";
    this.data = false;
  }

  Select(): void{
    try{
          this.manageBody = true;
          this._http.get(`${this.url}/selectConsult/${this.id}`).subscribe(
            result => {
              this.data = result;
              console.log(this.data.ID)
              if (this.data.ID == this.id){
                this.id = this.data.ID;
                this.paciente = this.data.Patient.ID;
                this.fecha = this.data.Date;
                this.motivo = this.data.ConsultReason;
                this.seguro = this.data.SecurityNumber;
                this.monto = this.data.Amount;
                this.diagnostico = this.data.Diagnosis;
                this.nota = this.data.Note;
                this.evidencia = this.data.Image;
               
              }
              else{
                this.manageBody = false;
                alert("Not exists in database!\n");
              
              }
            },
            error => {
              this.manageBody = false;
              alert("Not exists in database!\n" + <any>error);
         
            }
          );
     
    
    }
    catch (error){
      this.manageBody = false;
          alert("Error in database!\nPlease verify.");
         
    }
  }

  Update(){
    if(this.paciente != "" && this.fecha != "" && this.motivo != "" && this.seguro != ""  &&
    this.diagnostico != "" && this.nota != "" && this.evidencia != "" ){
      this._http.get(`${this.url}/updateConsult/${this.id},${this.paciente},${this.fecha},${this.motivo},${this.seguro},${this.monto},${this.diagnostico},${this.nota},${this.evidencia}`).subscribe(
        result => {
          this.data = result
          if (this.data.ID = this.id){
            this.manageBody = false;
            Swal.fire(
              'Excelente!',
              'Consulta actualizada sin problemas',
              'success'
            )
            this.Cleaning();
          }
          else{
            Swal.fire(
              ' ERROR!',
              'No se pudieron actualizar los datos',
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
  



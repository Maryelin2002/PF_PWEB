import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  public url: string
  public id: number;
  public cedula: string;
  public image:string;
  public name: string;
  public lastname: string;
  public bloodtype: string;
  public email: string;
  public sex: string;
  public birthdate: string;
  public alergia:string;
  public data: any;
  public manageBody: boolean;

  constructor(private _http: HttpClient) { 
    this.url = "http://localhost:8000" // http://127.0.0.1:8000
    this.manageBody = false;
    this.data = false;
  }

  ngOnInit(): void {
    this.Cleaning();
  }

  Cleaning(): void{
    this.id = null;
    this.cedula = "";
    this.image = "";
    this.name = "";
    this.lastname = "";
    this.bloodtype = "";
    this.email = "";
    this.sex = "";
    this.birthdate = "";
    this.alergia = "";
    this.data = false;
  }

  Select(): void{
    try{
          this.manageBody = true;
          this._http.get(`${this.url}/selectPatient/${this.id}`).subscribe(
            result => {
              this.data = result;
              console.log(this.data.ID)
              if (this.data.ID == this.id){
                this.id = this.data.ID;
                this.cedula = this.data.Cedula;
                this.image = this.data.image;
                this.name = this.data.Name;
                this.lastname = this.data.Lastname;
                this.bloodtype = this.data.Bloodtype;
                this.email = this.data.Email;
                this.sex = this.data.Sex;
                this.birthdate = this.data.Birthdate;
                this.alergia = this.data.Allergies;
               
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
    if(this.cedula != "" && this.name != "" && this.lastname != "" && this.bloodtype != "" && this.email != "" &&
    this.sex != "" && this.birthdate != "" && this.alergia != "" ){
      this._http.get(`${this.url}/updatePatient/${this.id},${this.cedula},${this.image},${this.name},${this.lastname},${this.bloodtype},${this.email},${this.sex},${this.birthdate},${this.alergia}`).subscribe(
        result => {
          this.data = result
          if (this.data.ID == this.id) {
            this.manageBody = false;
            Swal.fire(
              'Excelente!',
              'Paciente actualizado sin ploblemas',
              'success'
            )
            this.Cleaning();
          }
          else{
            Swal.fire(
              ' ERROR!',
              'No se pudo actualizar el paciente, verifique informacion',
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



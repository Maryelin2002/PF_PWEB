import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registropaciente',
  templateUrl: './registropaciente.component.html',
  styleUrls: ['./registropaciente.component.css']
})
export class RegistropacienteComponent implements OnInit {

  public url: string
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
  formPacientes: FormGroup;

  constructor(private _http: HttpClient,private _builder: FormBuilder) { 
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
    this.data = false;
    this.formPacientes = this._builder.group({
      cedula: ['',Validators.required],
      foto: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sangre: ['',Validators.required],
      correo: ['',Validators.email],
      genero: ['', Validators.required],
      fecha: ['', Validators.required],
      alergia: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.Cleaning();
  }

  Cleaning(): void{
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

  RegistrarPaciente(){
    if(this.cedula != "" && this.name != "" && this.lastname != "" && this.bloodtype != "" && this.email != "" &&
    this.sex != "" && this.birthdate != "" && this.alergia != "" ){
      this._http.get(`${this.url}/insertPatient/${this.cedula},${this.image},${this.name},${this.lastname},${this.bloodtype},${this.email},${this.sex},${this.birthdate},${this.alergia}`).subscribe(
        result => {
          this.data = result
          if (this.data.Cedula = this.cedula) {
            Swal.fire(
              'Excelente!',
              'Paciente registrado sin ploblemas',
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


  // Registro(){
  //   Swal.fire(
  //     'Registro exitoso!',
  //     'Se registro un paciente',
  //     'success'
  //   )
  // }

}

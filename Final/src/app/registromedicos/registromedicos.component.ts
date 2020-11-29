import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';
import { EmailValidator,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registromedicos',
  templateUrl: './registromedicos.component.html',
  styleUrls: ['./registromedicos.component.css']
})
export class RegistromedicosComponent implements OnInit {

  public url: string
  public username: string;
  public email: string;
  public password: string;
  public data: any;
  public MedicForm: FormGroup

  constructor(private _http:HttpClient,private _builder: FormBuilder) {
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
    this.data = false;
    this.MedicForm = this._builder.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
   }


  ngOnInit(): void {
    this.Cleaning();
  }

  Cleaning(): void{
    this.username = "";
    this.email = "";
    this.password = "";
    this.data = false;
  }

  RegistrarMedico(){
    if(this.username != "" && this.email != "" && this.password != ""){
      this._http.get(`${this.url}/signUpDoctor/${this.username},${this.email},${this.password}`).subscribe(
        result => {
          this.data = result
          if (this.data.Username = this.username) {
            Swal.fire(
              'Excelente!',
              'Medico registrado sin ploblemas',
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

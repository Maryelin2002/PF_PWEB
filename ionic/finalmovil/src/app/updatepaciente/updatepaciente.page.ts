import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-updatepaciente',
  templateUrl: './updatepaciente.page.html',
  styleUrls: ['./updatepaciente.page.scss'],
})
export class UpdatepacientePage implements OnInit {

  id:number;
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
  manageBody: Boolean;
  Paciente2Form: FormGroup

  constructor(private router: Router, private http: HttpClient, private _builder: FormBuilder) { 
    this.url = "https://fastapipython.herokuapp.com" // http://127.0.0.1:8000
    this.manageBody = false;
    this.data = false;
    this.Paciente2Form = this._builder.group({
      id: ['',Validators.required],
      cedula: ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      sangre: ['',Validators.required],
      genero: ['',Validators.required],
      fecha: ['',Validators.required],
      alergia: ['',Validators.required],
      foto: ['',Validators.required],
      correo: ['',Validators.email]
    })
  }

  


  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }

  Select(): void{
    try{
          this.manageBody = true;
          this.http.get(`${this.url}/selectPatient/${this.id}`).subscribe(
            result => {
              this.data = result;
              console.log(this.data.ID)
              if (this.data.ID == this.id){
                this.id = this.data.ID;
                this.Cedula = this.data.Cedula;
                this.Foto = this.data.image;
                this.Nombre = this.data.Name;
                this.Apellido = this.data.Lastname;
                this.TipoDeSangre = this.data.Bloodtype;
                this.Correo = this.data.Email;
                this.Genero = this.data.Sex;
                this.Fecha = this.data.Birthdate;
                this.Alergias = this.data.Allergies;
               
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

  

  ngOnInit() {
  }

  Update(){
    this.http.get(`${this.url}/updatePatient/${this.id},${this.Cedula},${this.Foto},${this.Nombre},${this.Apellido},${this.TipoDeSangre},${this.Correo},${this.Genero},${this.Fecha},${this.Alergias}`).subscribe(
     result =>{
       this.data = result;
       if(this.data.ID == this.id){
         this.manageBody = false;
       }
     }
    )
     
  }

  Menu(){
  this.router.navigate(["principal"])
  }

}

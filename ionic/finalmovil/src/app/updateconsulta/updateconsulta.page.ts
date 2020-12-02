import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-updateconsulta',
  templateUrl: './updateconsulta.page.html',
  styleUrls: ['./updateconsulta.page.scss'],
})
export class UpdateconsultaPage implements OnInit {

  id:number;
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
  manageBody: Boolean;
  Consulta2Form:FormGroup;

  constructor(private router: Router, private http: HttpClient, private _builder: FormBuilder) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.manageBody = false;
    this.Consulta2Form = this._builder.group({
      id: ['',Validators.required],
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
          this.http.get(`${this.url}/selectConsult/${this.id}`).subscribe(
            result => {
              this.data = result;
              console.log(this.data.ID)
              if (this.data.ID == this.id){
                this.id = this.data.ID;
                this.Patient = this.data.Patient.ID;
                this.Date = this.data.Date;
                this.Motivo = this.data.ConsultReason;
                this.Seguro = this.data.SecurityNumber;
                this.Monto = this.data.Amount;
                this.Diagnostico = this.data.Diagnosis;
                this.Nota = this.data.Note;
                this.Foto = this.data.Image;
               
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
    this.http.get(`${this.url}/updateConsult/${this.id},${this.Patient},${this.Date},${this.Motivo},${this.Seguro},${this.Monto},${this.Diagnostico},${this.Nota},${this.Foto}`)
    .subscribe(
      result => {
        this.data = result;
        if(this.data.ID == this.id){
          this.manageBody = false;
          console.log(this.data);
        }
      }
    )
  }


  Menu(){
    this.router.navigate(["principal"])
    }


}

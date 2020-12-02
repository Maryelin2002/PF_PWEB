import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
})
export class MedicosPage implements OnInit {

  url: any;
  data: any;
  Correo: string;
  password: string;
  Username: string;
  MedicosForm: FormGroup;

  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }

  constructor(private router: Router, private http: HttpClient, private _builder: FormBuilder) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.MedicosForm = this._builder.group({
      username: ['',Validators.required],
      correo: ['',Validators.email],
      password: ['',Validators.required]
    })
   }

  ngOnInit() {
  }

  registrarDoc(){
    this.http.get(`${this.url}/signUpDoctor/${this.Username},${this.Correo},${this.password}`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);

        if (this.data.Username == this.Username){
          console.log("Doctor registrado");

        }else{
          console.log("No fue posible el registro");
        }
      }
    )
  }

  Principal(){
    this.router.navigate(["home"]);
  }


}

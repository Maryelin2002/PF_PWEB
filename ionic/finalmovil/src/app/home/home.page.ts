import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Correo: string;
  password: string;
  url: any;
  data:any;
  public loginForm: FormGroup;

  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }

  constructor(private router: Router, private http: HttpClient,private _builder: FormBuilder) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.loginForm = this._builder.group({
      email: ['',Validators.email],
      password: ['', Validators.required]
    })
  }

  Login(){
    this.http.get(`${this.url}/logInDoctor/${this.Correo},${this.password}`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);

        if (this.data.LogIn){
          this.router.navigate(["principal"]);

        }
      }
    )
  }

  Medicos(){
    this.router.navigate(["medicos"]);
  }
}

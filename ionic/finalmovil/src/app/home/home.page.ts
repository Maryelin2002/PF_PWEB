import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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

  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/';
    this.data = false;
  }

  Login(){
    this.http.get(`${this.url}logInDoctor/${this.Correo},${this.password}`).subscribe(
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

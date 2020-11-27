import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private http: HttpClient) {}

  Principal(){
    this.router.navigate(["principal"]);
  }

  Medicos(){
    this.router.navigate(["medicos"]);
  }
}

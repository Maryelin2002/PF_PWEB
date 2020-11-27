import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  
  Menu(){
    this.router.navigate(["principal"])
  }
}

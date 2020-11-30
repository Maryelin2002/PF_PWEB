import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.page.html',
  styleUrls: ['./zodiaco.page.scss'],
})
export class ZodiacoPage implements OnInit {

  Doctor: string;
  url:any;
  data:any;
  table: any[] = [];

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'http://127.0.0.1:8000/';
    this.data = false;
    this.table;
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

  Menu(){
    this.router.navigate(["principal"]);
  }

  zodiacal(){
    this.http.get(`${this.url}zodiacal`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);

        if(this.data.Patients != null){
          console.log("Reporte zodiacal");
          for (let i = 0; i < this.data.length; i++) {
            this.table.push(this.data[i]);
        }

        }else{
          console.log("No fue posible generar reporte");
        }
      }
    )
  }

}

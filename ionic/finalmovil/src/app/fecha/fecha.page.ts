import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})
export class FechaPage implements OnInit {
  Date:string;
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

  Menu(){
    this.router.navigate(["principal"])
  }
  campos: any;
  x: number;
  clean(){
    this.campos = document.getElementsByTagName('ion-input');
    for (this.x = 0; this.x < this.campos.length; this.x++){
      this.campos[this.x].value = '';
    }
  }


  vistas(){
    this.http.get(`${this.url}consultsByDate`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);

        if(this.data.Consults != null){
          console.log("Reporte de visitas");
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

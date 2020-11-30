import { Component, OnInit, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
  Nombre:string;
  url:any;
  data:any;
  public visitas: Array<JSON>;

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.visitas = [];
   }

  ngOnInit() {
    this.cantidadVisitas();
  }

  ngOnChanges(changes: SimpleChanges):void{
    this.cantidadVisitas();
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
    this.router.navigate(["principal"])
  }

  cantidadVisitas(){
    this.visitas = [];
    this.http.get(`${this.url}/consultsQuantity`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);
        if(this.data.Patients != {}){
          console.log("Cantidad de visitas");
          for (let k in this.data.Patients) {
            this.visitas.push(this.data.Patients[k]);
          }
        }else{
          console.log("No fue posible generar reporte");
        }
      }
    )
  }

}

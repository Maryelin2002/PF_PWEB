import { Component, OnInit,SimpleChanges } from '@angular/core';
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
  public fecha: Array<JSON>;

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.fecha = [];
   }

   ngOnChanges(changes: SimpleChanges):void{
    this.vistas();
   }

  ngOnInit() {
    this.vistas();
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
    this.fecha = [];
    this.http.get(`${this.url}/consultsByDate/${this.Date}`).subscribe(
      results => {
        this.data = results;
        console.log(this.data);
        if(this.data.Consults != {}){
          console.log("Reporte de visitas");
          for (let k in this.data.Consults) {
            this.fecha.push(this.data.Consults[k]);
        }

        }else{
          console.log("No fue posible generar reporte");
        }
      }
    )
  }

}

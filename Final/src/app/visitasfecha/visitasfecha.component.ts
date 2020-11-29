import { Component, OnInit, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-visitasfecha',
  templateUrl: './visitasfecha.component.html',
  styleUrls: ['./visitasfecha.component.css']
})
export class VisitasfechaComponent implements OnInit {

  public url:string;
  public datas: any;
  public consultas: Array<JSON>;
  public fecha:string;

  constructor(private _http: HttpClient) { 
    this.datas = false;
    this.consultas = [];
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges):void{
    this.Visitas();
   }

  Visitas(): void{
    this.consultas = [];
    this.fecha = (`${this.fecha.substr(0,4)}${this.fecha.substr(5,2)}${this.fecha.substr(8,2)}`)
    this._http.get(`${this.url}/consultsByDate/${this.fecha}`).subscribe(
      result => {
        this.datas = result;
        if (this.datas.Consults != {}){
          for (let k in this.datas.Consults){
            this.consultas.push(this.datas.Consults[k]);
            Swal.fire(
              'Felicitaciones!',
              'Aqui estan sus consultas registradas en el sistema',
              'success'
            )
          }
        }
        else{
          this.consultas = [];
          Swal.fire(
            'Lo sentimos!',
            'Usted no tiene consultas registradas en el sistema',
            'error'
          )
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }


}

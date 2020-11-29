import { Component, OnInit, SimpleChanges } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cantidadvisitas',
  templateUrl: './cantidadvisitas.component.html',
  styleUrls: ['./cantidadvisitas.component.css']
})
export class CantidadvisitasComponent implements OnInit {

  public url:string;
  public datas: any;
  public cantidad: Array<JSON>;


  constructor(private _http: HttpClient) {
    this.datas = false;
    this.cantidad = [];
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
   }

   ngOnChanges(changes: SimpleChanges):void{
    this.Cantidad();
   }

  ngOnInit(): void {
    this.Cantidad();
  }

  Cantidad(): void{
    this.cantidad = [];
    this._http.get(`${this.url}/consultsQuantity`).subscribe(
      result => {
        this.datas = result;
        if (this.datas.Patients != {}){
          for (let k in this.datas.Patients){
            this.cantidad.push(this.datas.Patients[k]);
            Swal.fire(
              'Felicitaciones!',
              'Aqui estan sus consultas registradas en el sistema',
              'success'
            )
          }
        }
        else{
          this.cantidad = [];
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

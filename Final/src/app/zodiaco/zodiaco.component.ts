import { Component, OnInit , SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {

  public url:string;
  public datas: any;
  public personas: Array<JSON>;

  constructor(private _http: HttpClient) {
    this.datas = false;
    this.personas = [];
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
   }

  ngOnInit(): void {
    this.Zodiaco();
  }

  ngOnChanges(changes: SimpleChanges):void{
    this.Zodiaco();
   }

  Zodiaco(): void{
    this.personas = [];
    this._http.get(`${this.url}/zodiacal`).subscribe(
      result => {
        this.datas = result;
        if (this.datas.Patients != {}){
          for (let k in this.datas.Patients){
            this.personas.push(this.datas.Patients[k]);
            Swal.fire(
              'Felicitaciones!',
              'Aqui estan sus pacientes registrados en el sistema',
              'success'
            )
          }
        }
        else{
          this.personas = [];
          Swal.fire(
            'Lo sentimos!',
            'Usted no tiene pacientes registrados en el sistema',
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

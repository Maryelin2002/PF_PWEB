import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent implements OnInit {

  public url: string;
  public data: any;

  constructor(private _http: HttpClient) { 
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
    this.data = false;
  }

  ngOnInit(): void {
  }

  Cerrar(){
    this._http.get(`${this.url}/logOut`).subscribe(
      result => {
        this.data = result
        if (this.data) {
          Swal.fire(
            'Excelente!',
            'Sesion cerrada con exito!',
            'success'
          )
        
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }  
  }



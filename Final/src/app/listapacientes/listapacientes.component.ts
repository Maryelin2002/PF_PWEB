import { Component, OnInit,SimpleChanges, TemplateRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Swal from 'sweetalert2';
// import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-listapacientes',
  templateUrl: './listapacientes.component.html',
  styleUrls: ['./listapacientes.component.css']
})
export class ListapacientesComponent implements OnInit {

  public url:string;
  public datas: any;
  public lista: Array<JSON>;
  public codigo: string;
  // modalRef: BsModalRef;

  constructor(private _http: HttpClient) { 
    this.datas = false;
    this.lista = [];
    this.url = "http://localhost:8000"; // http://127.0.0.1:8000
  }

  ngOnInit(): void {
    // this.Cleaning();
    this.Lista();
  }

  Cleaning(): void{
   this.codigo = "";
    this.datas = false;
  }

  ngOnChanges(changes: SimpleChanges):void{
    this.Lista();
   }

   Lista(): void{
    this.lista = [];
    this._http.get(`${this.url}/selectPatient`).subscribe(
      result => {
        this.datas = result;
        if (this.datas.Patients != {}){
          console.log(this.datas.Patients);
          for (let k in this.datas.Patients){
            this.lista.push(this.datas.Patients[k]);
            Swal.fire(
              'Felicitaciones!',
              'Paciente encontrado',
              'success'
            )
          }
        }
        else{
          this.lista = [];
          Swal.fire(
            'Lo sentimos!',
            'Usted no tiene pacientes que coindicida con el codigo ingresado',
            'error'
          )
        }
      },
      error => {
        alert("Not exists in database!\n" + <any>error);
      }
    );
  }

  // public OpenModal(template: TemplateRef<any>){
  //   this.modalRef = this.modalservice.show(template)
  // }

}

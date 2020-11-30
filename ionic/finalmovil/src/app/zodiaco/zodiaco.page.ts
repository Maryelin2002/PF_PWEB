import { Component, OnInit, SimpleChanges } from '@angular/core';
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
  public personas: Array<JSON>;

  constructor(private router: Router, private http: HttpClient) {
    this.url = 'https://fastapipython.herokuapp.com';
    this.data = false;
    this.personas = [];
   }

   ngOnChanges(changes: SimpleChanges):void{
    this.zodiacal();
   }

  ngOnInit() {
    this.zodiacal();
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
    this.personas = [];
    this.http.get(`${this.url}/zodiacal`).subscribe(
      results => {
        this.data = results;
        console.log(this.data.Patients);
        // document.getElementById("contenido").innerHTML =
        //     `
        //    ${this.data.Patients}

        //     `
        if(this.data.Patients != {}){
          console.log("Reporte zodiacal");
          for (let k in this.data.Patients) {
            this.personas.push(this.data.Patients[k]);
           
        }

        }else{
          console.log("No fue posible generar reporte");
        }
      }
    )
  }

}

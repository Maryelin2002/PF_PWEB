import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.page.html',
  styleUrls: ['./zodiaco.page.scss'],
})
export class ZodiacoPage implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  Menu(){
    this.router.navigate(["principal"]);
  }

}

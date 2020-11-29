import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Final';
  constructor(private router: Router) { }

  Registro(){
    this.router.navigate(["registromedicos"]);
  }
}

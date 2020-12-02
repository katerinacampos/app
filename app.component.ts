import { Component, OnInit } from '@angular/core';
import { GeneralService } from './services/general.service';
import { Router, RouterLink, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto-new';

  constructor(private ser: GeneralService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        //console.log("Loaded!");
        this.correo = localStorage.getItem("correo");
        this.pass = localStorage.getItem("pass");

        this.ser.login(this.correo,this.pass).subscribe(x => this.logged = parseInt(x.toString()))
        this.ser.isAdmin(this.correo,this.pass).subscribe(y => this.admin = parseInt(y.toString()))
        //console.log("admin: "+this.admin);
        //console.log("admin: "+this.admin);

      }
    });
  }

  /*
    Apartado de check_login;
  */
  nombre = "";
  correo = "";
  telefono = "";
  pass = "";
  admin = 0;
  logged = 0;

  ngOnInit(): void {
  }

  eliminateCache() {
    localStorage.removeItem("correo");
    localStorage.removeItem("pass");
    this.correo = localStorage.getItem("correo");
    this.pass = localStorage.getItem("pass");
        
    console.log("Sesion cerrada correctamente")
    this.router.navigateByUrl('/login');
  }

}

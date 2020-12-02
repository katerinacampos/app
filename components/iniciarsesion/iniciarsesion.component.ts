import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
  styleUrls: ['./iniciarsesion.component.css']
})
export class IniciarsesionComponent implements OnInit {
  correo;
  pass;
  loged_sucess = -1;
  loged_admin=-1;
  constructor(private ser: GeneralService, private router: Router) {

  }

  ngOnInit(): void {
  }

  login() {
    this.ser.login(this.correo, this.pass).subscribe(x => this.loged_sucess = parseInt(x.toString()));
    this.ser.isAdmin(this.correo,this.pass).subscribe(y => this.loged_admin = parseInt(y.toString()))

    setTimeout(() => {
      
    if (this.loged_sucess == 1) {
      localStorage.setItem('correo', this.correo);
      localStorage.setItem('pass', this.pass);
      if (this.loged_admin== 1){
        this.router.navigateByUrl('/admin');
      }else{
        this.router.navigateByUrl('/form');
      }
    }      
    }, 3000);
  }


}

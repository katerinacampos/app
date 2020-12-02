import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  mensaje_registro;
  nombre="";
  correo="";
  telefono="";
  pass="";

  usuario_existe=0;

  constructor(private ser: GeneralService, private router:Router) { }

  ngOnInit(): void {
  }

  regUser(n:String,c: String,t:String,p: String){
    localStorage.setItem('correo', this.correo);
    localStorage.setItem('pass', this.pass);
    this.router.navigateByUrl('/welcome');
    return this.ser.register(n,c,t,p).subscribe(x => this.mensaje_registro = x);
  }

  checkUser(c: String){
    return this.ser.checkUser(c).subscribe(x => this.usuario_existe = parseInt(x.toString()));
  }
  
}

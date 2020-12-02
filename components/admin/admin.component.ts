import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HorasReservadas } from 'src/app/interfaces/horas-reservadas';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Horas: HorasReservadas[];
  HorasAceptadas: HorasReservadas[];
  tabla1=0;
  tabla2=0;
  constructor(private ser: GeneralService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerHoras();
    this.obtenerHorasAceptadas();
  }

  obtenerHoras() {
    this.ser.obtenerHoras().subscribe(a => this.Horas=a);
    //this.tabla1=Object.keys(this.Horas).length;//Da errores si esta vacia la tabla xD.
  }
  
  obtenerHorasAceptadas() {
    this.ser.obtenerHorasAceptadas().subscribe(a => this.HorasAceptadas=a);
    //this.tabla2=Object.keys(this.HorasAceptadas).length;//Da errores si esta vacia la tabla xD.
  }

  h=0;
  aceptarHora(hora:number,dia: number,mes: number, anio: number){
    this.ser.aceptarHora(hora,dia,mes,anio).subscribe(y => this.h = parseInt(y.toString()));
    this.router.navigateByUrl('/welcome');
  }
}
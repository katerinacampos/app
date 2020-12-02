import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  week_day = 0;
  day;
  month;
  year;

  actual_day;
  actual_month;
  actual_year;
  actual_date;


  dmy;
  date_picked = 0;
  horario_ocupado = 0;
  horario = -1;
  day_i;
  month_i;
  year_i;

  servicio = -1;
  servicio_contratacion = 0;
  servicio_actualizacion = 0;
  today: Date;
  date: Date;
  util: Date;

  correo;

  hora_0=0;
  hora_1=0;
  hora_2=0;
  hora_3=0;
  hora_4=0;
  hora_5=0;
  hora_6=0;
  hora_7=0;
  hora_8=0;
  hora_9=0;
  hora_10=0;
  hora_11=0;
  hora_12=0;
  hora_13=0;
  hora_14=0;

  constructor(private ser: GeneralService, private router: Router) {
    this.actual_day = ((new Date().getDate()).toString());
    this.actual_month = ((new Date().getMonth()+1).toString());
    this.actual_year = ((new Date().getFullYear()).toString());
    //this.actual_date = this.actual_year + "-" + this.actual_month + "-" + this.actual_day;
    this.actual_date = new Date().toJSON().split('T')[0];
    this.date = new Date();
  }

  formulario_completado=0;
  ingresarHora(Input_correo: String, Input_dia: number, Input_mes: number, Input_anio: number, Input_hora: number, Input_seleccion: number, Input_servicio_contratacion: number, Input_servicio_actualizacion: number) {
    this.ser.ingresarHora(Input_correo, Input_dia, Input_mes, Input_anio, Input_hora, Input_seleccion, Input_servicio_contratacion, Input_servicio_actualizacion).subscribe(x => this.formulario_completado = parseInt(x.toString()));
    this.router.navigateByUrl('/welcome');
  }

  chequearHora(Input_hora: number, Input_dia: number, Input_mes: number, Input_anio: number) {
    this.ser.horaExiste(Input_hora, Input_dia, Input_mes, Input_anio).subscribe(x => this.horario_ocupado = parseInt(x.toString()));
  }

  getDate() {
    this.dmy = this.date.valueOf().toString();
    this.year = this.dmy.charAt(0) + this.dmy.charAt(1) + this.dmy.charAt(2) + this.dmy.charAt(3);
    this.year_i = parseInt(this.year);

    this.month = this.dmy.charAt(5) + this.dmy.charAt(6);
    this.month_i = parseInt(this.month);

    this.day = this.dmy.charAt(8) + this.dmy.charAt(9);
    this.day_i = parseInt(this.day);

    this.ser.horaExiste(0, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_0 = parseInt(x.toString()));
    this.ser.horaExiste(1, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_1 = parseInt(x.toString()));
    this.ser.horaExiste(2, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_2 = parseInt(x.toString()));
    this.ser.horaExiste(3, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_3 = parseInt(x.toString()));
    this.ser.horaExiste(4, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_4 = parseInt(x.toString()));
    this.ser.horaExiste(5, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_5 = parseInt(x.toString()));
    this.ser.horaExiste(6, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_6 = parseInt(x.toString()));
    this.ser.horaExiste(7, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_7 = parseInt(x.toString()));
    this.ser.horaExiste(8, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_8 = parseInt(x.toString()));
    this.ser.horaExiste(9, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_9 = parseInt(x.toString()));
    this.ser.horaExiste(10, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_10 = parseInt(x.toString()));
    this.ser.horaExiste(11, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_11 = parseInt(x.toString()));
    this.ser.horaExiste(12, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_12 = parseInt(x.toString()));
    this.ser.horaExiste(13, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_13 = parseInt(x.toString()));
    this.ser.horaExiste(14, this.day_i, this.month_i, this.year_i).subscribe(x => this.hora_14 = parseInt(x.toString()));
    
    setTimeout(() => {
      
      this.date_picked = 1;
      
      }, 1200);
    
    
  }

  cerrarSesionPorEliminación(){
    if (localStorage.getItem("correo") != null) {
      this.correo = localStorage.getItem("correo");
    }else{
      localStorage.removeItem("correo");
      localStorage.removeItem("pass");
            
      console.log("Sesion cerrada")
      this.router.navigateByUrl('/login');
    }
  }
  ngOnInit() {
    this.cerrarSesionPorEliminación();
  }

}

import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import * as moment from 'moment';
import { AuthService } from '../../../auth/auth.service';
import { ModelMotivosComponent } from './components/model-motivos/model-motivos.component';

@Component({
  selector: 'ngx-abonos',
  templateUrl: './abonos.component.html',
  styleUrls: ['./abonos.component.scss']
})
export class AbonosComponent implements OnInit {

  hideme = [];
  formulario = [];
  fechaInicio: any
  fechaFin: any
  abonos: any
  total: any
  Index: any;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  buscarAbono(){

    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}

    this.authSvc.buscarAbonosEntreFechas(json).subscribe(data=>{
      this.abonos = data

      this.total = 0

      for(let a = 0 ; a < this.abonos.length ; a++){
        this.total += Math.abs(this.abonos[a].precioFinal)
      }

      console.log(data)
      console.log(this.total)
    })

  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  showFormulario(index) {
    this.formulario[index] = !this.formulario[index];
    this.Index = index;
  }

}

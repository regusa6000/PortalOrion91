import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-control-usuarios',
  templateUrl: './control-usuarios.component.html',
  styleUrls: ['./control-usuarios.component.scss']
})
export class ControlUsuariosComponent implements OnInit {

  datosMenu: any = []
  item: string[] = []
  primero = false

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarBotonesSeleccion().subscribe(data=>{
      this.datosMenu = data
    })


  }

  ver(event,posicion: any){
    console.log(event)
    console.log('Posicion: ' + posicion)

  }

}

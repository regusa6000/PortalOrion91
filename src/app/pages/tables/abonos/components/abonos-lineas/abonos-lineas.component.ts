import { Component, Input, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { AuthService } from '../../../../../auth/auth.service';
import { ModelMotivosComponent } from '../model-motivos/model-motivos.component';

@Component({
  selector: 'ngx-abonos-lineas',
  templateUrl: './abonos-lineas.component.html',
  styleUrls: ['./abonos-lineas.component.scss']
})
export class AbonosLineasComponent implements OnInit {

  @Input() orPedido: any
  source: any

  constructor(private authSvc: AuthService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    let json = {'orPedido': this.orPedido}
    this.authSvc.buscarLineasAbonos(json).subscribe(data=>{
      this.source = data
      console.log(this.source)
    })
  }

  open(idAbonoLinea: any,idFactura: any, pedidoAx: any, idProduct: any, nombreProducto: any, cantidadVendida: any, precioFinal:any, imagen: any){
    this.dialogService.open(ModelMotivosComponent,{
      context: { orPedido: this.orPedido, idFactura: idFactura, pedidoAx: pedidoAx, idProduct: idProduct, nombreProducto: nombreProducto, cantidadVendida: cantidadVendida, precioFinal: precioFinal, imagen: imagen, idLineaAbono: idAbonoLinea},
    }).onClose.subscribe(data=>{
      this.ngOnInit()
    })
  }

}

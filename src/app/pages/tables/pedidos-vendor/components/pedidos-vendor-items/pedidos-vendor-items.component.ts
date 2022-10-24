import { Component,Input, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-vendor-items',
  templateUrl: './pedidos-vendor-items.component.html',
  styleUrls: ['./pedidos-vendor-items.component.scss']
})
export class PedidosVendorItemsComponent implements OnInit {

  itemsPedido: any = []
  arrayProvicional: any = []
  hideme = [];
  Index: any;
  nuevaCantidad = []
  @Input() idAmazonVendor: any
  @Input() shipToParty: any

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    let json = {'idAmazonVendor': this.idAmazonVendor}

    this.authSvc.pedidosAmazonVendorItems(json).subscribe(data=>{
      this.itemsPedido = data

      // console.log(data)

      for(let item = 0 ; item < this.itemsPedido.length; item++){

        let jsonLmat = {'referencia': this.itemsPedido[item].vendorProductIdentifier}

        this.authSvc.pedidosAmazonVendorLmat(jsonLmat).subscribe(data=>{

          let itemid = data['details'].itemid
          let lmat = data['details'].lmat
          let descripcion = data['details'].descripcion
          let stock = data['details'].stock


          let tamaño = data['details'].lineas_lmat.length

          let jsonProvisional =
          { 'idAmazonVendorOrder': this.itemsPedido[item].idAmazonVendorOrder,
            'amazonProductIdentifier': this.itemsPedido[item].idAmazonVendorOrder,
            'vendorProductIdentifier': this.itemsPedido[item].vendorProductIdentifier,
            'itemSequenceNumber': this.itemsPedido[item].itemSequenceNumber,
            'orderedQuantityAmount': this.itemsPedido[item].orderedQuantityAmount,
            'orderedQuantityUnitOfMeasure': this.itemsPedido[item].orderedQuantityUnitOfMeasure,
            'orderedQuantityUnitSize': this.itemsPedido[item].orderedQuantityUnitSize,
            'netCostCurrencyCode': this.itemsPedido[item].netCostCurrencyCode,
            'netCostAmount': this.itemsPedido[item].netCostAmount,
            'listPriceCurrencyCode': this.itemsPedido[item].listPriceCurrencyCode,
            'listPriceAmount': this.itemsPedido[item].listPriceAmount,
            'itemid': itemid,
            'lmat': tamaño,
            'descripcion': descripcion,
            'stock': stock
          }

          this.arrayProvicional.push(jsonProvisional)
          console.log(this.arrayProvicional)
          console.log('Tamaño -> ' + tamaño)

        })

      }

    })
  }

  funcionCantidad(idPedidoAmazon: string, itemId: number, nuevaCantidad: number, precio: number, numeroLinea: number){

    let json = {'idPedidoAmazon': idPedidoAmazon, 'itemId': itemId, 'cantidad': nuevaCantidad
                , 'precio': precio, 'numeroLinea': numeroLinea}

    this.authSvc.registarLineaVendor(json).subscribe(data=>{
      if(data == true){
        this.showToastRegister('success')
      }else{
        this.showToastError('danger')
      }

      if(data == 1){
        this.showToast('success')
      }else{
        this.showToastError('danger')
      }

    })

  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  registrarPedidoVendor(){
    let json = {'orderId': this.idAmazonVendor,'shipToParty': this.shipToParty}

    this.authSvc.registrarPedidoVendorAx(json).subscribe(data=>{
      console.log(data)

      if(data == true){
        this.showToastRegister('success')
      }

    })
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Creado!`, { status });
  }

  showToastError(status: NbComponentStatus) {
    this.toastrService.show(status, `Error Registro!`, { status });
  }

}

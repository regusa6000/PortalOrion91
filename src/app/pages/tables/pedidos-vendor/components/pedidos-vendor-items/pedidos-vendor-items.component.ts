import { Component,Input, OnInit } from '@angular/core';
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

  constructor(private authSvc: AuthService) { }

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


      /**Parte para mostrar o no el más**/

      // for(let a = 0 ; a < this.itemsPedido.length ; a++){

      //   let jsonLmat = {'referencia': this.itemsPedido[a].vendorProductIdentifier}

      //   this.authSvc.pedidosAmazonVendorLmat(jsonLmat).subscribe(data=>{

      //     console.log('IdVendor -> ' +  this.itemsPedido[a].vendorProductIdentifier + ' , Lmat -> ' + data['details'].lmat)

      //     if(data['details'].lmat == 0){
      //       document.getElementById("icono-" + this.itemsPedido[a].vendorProductIdentifier).style.display = "none";
      //     }

      //   })

      //   console.log(this.itemsPedido[a].vendorProductIdentifier)
      // }

    })
  }

  funcionCantidad(nuevaCantidad: number){

    alert(nuevaCantidad)

  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }


}

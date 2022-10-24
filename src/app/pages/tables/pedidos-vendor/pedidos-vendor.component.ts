import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-pedidos-vendor',
  templateUrl: './pedidos-vendor.component.html',
  styleUrls: ['./pedidos-vendor.component.scss']
})
export class PedidosVendorComponent implements OnInit {

  pedidosVendor: any
  hideme = [];
  Index: any;

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.pedidosAmazonVendor().subscribe(data=>{
      this.pedidosVendor = data
      console.log(this.pedidosVendor)
      console.log(this.pedidosVendor.length)

      for(let a = 0 ; a < this.pedidosVendor.length; a++){
        console.log(this.pedidosVendor[a].purchaseOrderNumber)

        //Recordar que tenemos que recoger TOKEN de Usuario
        let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdnBueGVyLmdydXBvaGlkYWxnb3MuY29tOjgwODAvYXBpL2xvZ2luUG9ydGFsIiwiaWF0IjoxNjY2MTc2MzI4LCJleHAiOjE2NjYxNzk5MjgsIm5iZiI6MTY2NjE3NjMyOCwianRpIjoiNEUyVldIVmFHclM0ckpTeiIsInN1YiI6NCwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImVtYWlsIjoicmd1dGllcnJlekBoaWRhbGdvc2dyb3VwLmNvbSJ9.rJ8rjvXenYFlSLrhD6GcviEhVkB4t14etdzDJwUFIlU'
        let json = {'token': token, 'order_id': this.pedidosVendor[a].purchaseOrderNumber}

        this.authSvc.pedidosAmazonVendorEnAx(json).subscribe(data=>{
          console.log('Pedidos Vendor -> ' + this.pedidosVendor[a].purchaseOrderNumber + ', existe ->' + data['details'].existe)

          if(data['details'].existe == 'SI'){
            document.getElementById("fila-" + this.pedidosVendor[a].purchaseOrderNumber).style.backgroundColor = "green";
            document.getElementById("fila-" + this.pedidosVendor[a].purchaseOrderNumber).style.color = "white";
            document.getElementById("icono-" + this.pedidosVendor[a].purchaseOrderNumber).style.display = "none";
          }

        })
      }

    })
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Actualizado!`, { status });
  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Registro Creado!`, { status });
  }

  showToastEliminar(status: NbComponentStatus) {
    this.toastrService.show(status, `Rango Eliminado!`, { status });
  }

}

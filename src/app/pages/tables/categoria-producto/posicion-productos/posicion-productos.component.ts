import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-posicion-productos',
  templateUrl: './posicion-productos.component.html',
  styleUrls: ['./posicion-productos.component.scss']
})
export class PosicionProductosComponent implements OnInit {

  catProduct: any
  editarPosicion: string[] = []
  @Input() idCategory: any

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.productosPorIdCategoria(this.idCategory).subscribe(data=>{
      this.catProduct = data
      console.log(this.catProduct)
    })
  }

  editar(idCategory: number, idProduct: number, posicion: number){
    this.authSvc.actualizarProductoCategoria(idCategory,idProduct,posicion).subscribe(data=>{
      if(data == 1){
        this.showToast('success')
        this.authSvc.productosPorIdCategoria(idCategory).subscribe(data=>{
          this.catProduct = ''
          this.catProduct = data
          console.log(this.catProduct)
        })
        this.editarPosicion.pop()
      }
    })
  }

  showToast(status: NbComponentStatus) {
    this.toastrService.show(status, `Posición Actualizada!`, { status });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-elementor',
  templateUrl: './productos-elementor.component.html',
  styleUrls: ['./productos-elementor.component.scss']
})
export class ProductosElementorComponent implements OnInit {

  elementor: any

  constructor(public authSvc: AuthService) {
    // this.refrescarTabla();
    // setInterval(() => { this.refrescarTabla(); }, 100000);
   }

  ngOnInit(): void {
  }

  // refrescarTabla(){
  //   this.authSvc.alertasElementor().subscribe(data=>{
  //     this.elementor = data
  //   })
  // }

}

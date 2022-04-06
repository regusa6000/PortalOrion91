import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-categorias-vacias',
  templateUrl: './categorias-vacias.component.html',
  styleUrls: ['./categorias-vacias.component.scss']
})
export class CategoriasVaciasComponent implements OnInit {

  categoriasVacias: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.categoriasVacias().subscribe(data=>{
      this.categoriasVacias = data
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-sliders-elementor',
  templateUrl: './sliders-elementor.component.html',
  styleUrls: ['./sliders-elementor.component.scss']
})
export class SlidersElementorComponent implements OnInit {

  source: any
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.alertasElementor().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 30000);
  }

  config = {
    actions: false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns:{
      id_product:{
        title: 'Id Producto',
        type: 'number'
      },
      name:{
        title: 'Producto',
        type: 'string'
      },
      cat_name:{
        title: 'Categoría',
        type: 'string'
      }
    },
  };

}

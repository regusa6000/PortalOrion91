import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { EventEmitter } from 'events';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'ngx-guardar-documentos',
  templateUrl: './guardar-documentos.component.html',
  styleUrls: ['./guardar-documentos.component.scss']
})
export class GuardarDocumentosComponent implements OnInit {

  options = [];
  arrayTipoDocumento: any = []
  filteredOptions$: Observable<string[]>;
  arrayProductos: any = []
  ean13: any
  eventoArchivo: any
  tipoDocumento: any
  observacion: any

  @ViewChild('autoInput') input;
  @Output() refrescarTabla = new EventEmitter();

  constructor(public authSvc: AuthService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.authSvc.cargarSelectProductos().subscribe(data=>{

      this.arrayProductos = data
      console.log(this.arrayProductos)

      for(let a = 0 ; a < this.arrayProductos.length; a++){
        this.options.push(this.arrayProductos[a].ean13)
      }

    })

    this.filteredOptions$ = of(this.options);

    this.authSvc.buscarTipoDeDocumento().subscribe(data=>{
      this.arrayTipoDocumento = data
    })

  }

  refresTable(){
    let data = 'Recarga'
    this.refrescarTabla.emit(data)
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    console.log($event)

    let json = {'producto': $event}

    console.log(json)

    this.authSvc.buscarEan13PorNombreProducto(json).subscribe(data=>{
      this.ean13 = data[0].ean13
      console.log('Ean13 -> ' + this.ean13)
    })
  }

  onFileSelected(event){
    this.eventoArchivo = event
    console.log(event)
  }

  buscarTipodeDocumento(event){
    this.tipoDocumento = event
    console.log('Tipo de Documento: ' + event)
  }

  registrarNoticia(){
    console.log(this.observacion)

    const file:File = this.eventoArchivo.target.files[0];
    let idPais = '1'

    let formData = new FormData();
    formData.append('archivo',file)
    formData.append('ean13',this.ean13)
    formData.append('idPais',idPais)
    formData.append('idTipo',this.tipoDocumento)
    formData.append('observacion',this.observacion)

    this.authSvc.registrarDocumentoPorProducto(formData).subscribe(data=>{
      console.log(data)
      if(data == true){
        this.showToastRegister('success')
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Archivo Guardado!`, { status });
  }
  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos, imagen ya registrada!`, { status });
  }

}

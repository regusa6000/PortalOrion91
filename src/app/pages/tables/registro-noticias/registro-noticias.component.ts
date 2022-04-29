import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-registro-noticias',
  templateUrl: './registro-noticias.component.html',
  styleUrls: ['./registro-noticias.component.scss']
})
export class RegistroNoticiasComponent implements OnInit {

  fileName:any;
  eventoArchivo: any
  tituloNoticia: string
  noticia: string
  idUsuario: any
  imageSrc: string;

  constructor(public authSvc: AuthService, private toastrService: NbToastrService) {
    let datosUsuario = localStorage.getItem('auth_app_token')
    console.log('LocalStorage')
    let valoresUsuario = JSON.parse(datosUsuario)
    console.log(valoresUsuario)

    let idUsuario = valoresUsuario.value[0]['id_user']
    this.idUsuario = idUsuario
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.eventoArchivo = event
    const reader = new FileReader();
    const [file] = event.target.files;
    reader.readAsDataURL(file);

    reader.onload = () => {this.imageSrc = reader.result as string;}
  }

  registrarNoticia(){

    const file:File = this.eventoArchivo.target.files[0];

    if (file) {
        this.fileName = file.name;
    }

    let formData = new FormData();
    formData.append('archivo',file)
    formData.append('idUser',this.idUsuario)
    formData.append('titulo',this.tituloNoticia)
    formData.append('noticia',this.noticia)

    this.authSvc.subirArchivos(formData).subscribe(data=>{
      console.log(data)

      if(data == true){
        this.showToastRegister('success')
          this.noticia = ''
          this.tituloNoticia = ''
          this.imageSrc = ''
      }else{
        this.showToastErrorDatos('danger')
      }
    })

  }

  showToastRegister(status: NbComponentStatus) {
    this.toastrService.show(status, `Noticia Creada!`, { status });
  }
  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `Error de Datos, imagen ya registrada!`, { status });
  }

}

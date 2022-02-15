import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User, UserResponse } from '../shared/guards/components/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlVentasSemanales: string = 'http://vpnxer.grupohidalgos.com:8070/ventasSemanalesTiendas';

  //Badges
  urlControlPedidosPagadosBadge: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosPagadosBadge';
  urlControlPedidosAlmacenBadge: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosAlmacenBadge';
  urlBadgePagosFraccionados: string = 'http://vpnxer.grupohidalgos.com:8070/badgePedidosFraccionados';
  urlBadgePedidosSinStockMakro: string = 'http://vpnxer.grupohidalgos.com:8070/badgepedidosSinStockMakro';
  urlBadgeAliexpress: string = 'http://vpnxer.grupohidalgos.com:8070/badgeAliExpress';
  urlCombinadosPredeterminadosSinStockBadge: string = 'http://vpnxer.grupohidalgos.com:8070/CombinadospredeterminadosSinStockCount';

  //Alertas
  urlPagosFraccionados: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosFraccionados';
  urlControlPedidosPagados: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosPagados';
  urlControlPedidosAlmacen: string = 'http://vpnxer.grupohidalgos.com:8070/controlPedidosAlmacen';
  urlControlPreCompra: string = 'http://vpnxer.grupohidalgos.com:8070/controlPreCompras';
  urlPedidosSinStockMakro: string = 'http://vpnxer.grupohidalgos.com:8070/pedidosSinStockMakro';
  urlControlAliexpress: string = 'http://vpnxer.grupohidalgos.com:8070/controlAliExpress';
  urlCombinadosPredeterminadosSinStock: string = 'http://vpnxer.grupohidalgos.com:8070/CombinadospredeterminadosSinStock';

  //Envios
  urlControlTransportistas: string = 'http://vpnxer.grupohidalgos.com:8070/controlTransportistas';
  urlCargarComboName: string = 'http://vpnxer.grupohidalgos.com:8070/cargarComboName';
  urlControlTransportistasName: string = 'http://vpnxer.grupohidalgos.com:8070/controlTransportistasName/';
  urlPorcentajeTransportistas: string = 'http://vpnxer.grupohidalgos.com:8070/porcentajeTransportistas';

  //Imagenes
  urlImagenes: string = 'http://vpnxer.grupohidalgos.com:8070/imagenes';

  //Control ManoMano
  urlControlManoAMano: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmano';
  urlControlManoAManoPorId: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmano/';
  urlManoManoDistinto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAManoDivision';
  urlManoManoPrimero: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorPrimero';
  urlManoManoSegundo: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSegundo';
  urlManoManoTercero: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorTercero';
  urlManoManoCuarto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorCuarto';
  urlManoManoSexto: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSexto';
  urlManoManoSeptimo: string = 'http://vpnxer.grupohidalgos.com:8070/manoAmanoPorSeptimo';

  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  //Parte del Login
    login(authData: User): Observable<UserResponse | void> {
      return this.http
      .post<UserResponse>('http://192.168.30.148:8000/login/', authData)
      .pipe(
        map( (res: UserResponse) => {
          console.log(res.data)

          this.saveToken(res.data[0].password);
          this.loggedIn.next(true);
          localStorage.setItem('usuario',JSON.stringify(res.data[0]))
          console.log(res)
          return res;
        }),
        catchError( (err) => this.handlerError(err) )
      );
    }

  private saveToken(token: string):void{
    localStorage.setItem('token',token);
  }

  private handlerError(err: { message: any; }): Observable<never>{

    let errorMessage = 'An error Occurred';

    if(err){
        errorMessage = `Error: code ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //Ventas Semanales
  ventasSemanales(){
    let direccion = this.urlVentasSemanales
    return this.http.get(direccion)
  }

  //PreCompra
  cargarTablaPreCompra(){
    let direccion = this.urlControlPreCompra;
    return this.http.get(direccion);
  }

  //Badges
  controlPedidosPagadosBadge(){
    let direccion = this.urlControlPedidosPagadosBadge
    return this.http.get(direccion)
  }
  controlPedidosAlmacen(){
    let direccion = this.urlControlPedidosAlmacenBadge
    return this.http.get(direccion)
  }
  badgePedidosFraccionados(){
    let direccion = this.urlBadgePagosFraccionados
    return this.http.get(direccion)
  }
  badgePedidosSinStockMakro(){
    let direccion = this.urlBadgePedidosSinStockMakro
    return this.http.get(direccion)
  }
  badgeAliexpress(){
    let direccion = this.urlBadgeAliexpress
    return this.http.get(direccion)
  }
  countDeCombinadosPredeterminadosSinStock(){
    let direccion = this.urlCombinadosPredeterminadosSinStockBadge
    return this.http.get(direccion)
  }


  //Alertas
  pedidosPagosFraccionados(){
    let direccion = this.urlPagosFraccionados
    return this.http.get(direccion)
  }
  cargarTablaPedidosPagados(){
    let direccion = this.urlControlPedidosPagados;
    return this.http.get(direccion)
  }
  cargarTablaPedidosAlmacen(){
    let direccion = this.urlControlPedidosAlmacen;
    return this.http.get(direccion);
  }
  pedidosSinStockMakro(){
    let direccion = this.urlPedidosSinStockMakro
    return this.http.get(direccion)
  }
  controlAliExpress(){
    let direccion = this.urlControlAliexpress
    return this.http.get(direccion)
  }
  combinadosPredeterminadosSinStock(){
    let direccion = this.urlCombinadosPredeterminadosSinStock
    return this.http.get(direccion)
  }

   //Envios
  cargarTablaTransportistas(){
    let direccion = this.urlControlTransportistas;
    return this.http.get(direccion)
  }
  cargarComboTransportistaName(){
    let direccion = this.urlCargarComboName
    return this.http.get(direccion)
  }
  cargarTransportistaName(id: number){
    let direccion = this.urlControlTransportistasName + id
    return this.http.get(direccion)
  }
  porcentajeTransportistas(){
    let direccion = this.urlPorcentajeTransportistas
    return this.http.get(direccion)
  }

  //Control de Imagenes
  controlImagenes(){
    let direccion = this.urlImagenes
    return this.http.get(direccion)
  }

  //ManoMano
  cargarTablaDivision(){
    let direccion = this.urlManoManoDistinto
    return this.http.get(direccion)
  }

  cargarTablaPrimeraDivision(){
    let direccion = this.urlManoManoPrimero
    return this.http.get(direccion)
  }

  cargarTablaSegundaDivision(){
    let direccion = this.urlManoManoSegundo
    return this.http.get(direccion)
  }

  cargarTablaTerceraDivision(){
    let direccion = this.urlManoManoTercero
    return this.http.get(direccion)
  }

  cargarTablaCuartaDivision(){
    let direccion = this.urlManoManoCuarto
    return this.http.get(direccion)
  }


  cargarTablaSextaDivision(){
    let direccion = this.urlManoManoSexto
    return this.http.get(direccion)
  }

  cargarTablaSeptimaDivision(){
    let direccion = this.urlManoManoSeptimo
    return this.http.get(direccion)
  }

}

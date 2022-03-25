import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-ventas-por-habitantes',
  templateUrl: './ventas-por-habitantes.component.html',
  styleUrls: ['./ventas-por-habitantes.component.scss']
})
export class VentasPorHabitantesComponent implements OnInit {

  arrayGlobal: any

  map: L.Map;
  json;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 7,
    center: L.latLng(47.482019, -1)
  };

  constructor(private http: HttpClient,public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onMapReady(map: L.Map) {
    this.http.get("/orion/assets/departaments.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      L.geoJSON(this.json).addTo(map);
    });

    this.authSvc.ventasHabitantes().subscribe(data=>{

      this.arrayGlobal = data

      var century21icon = L.icon({
        iconUrl: 'https://img2.freepng.es/20180421/zzw/kisspng-computer-icons-map-clip-art-location-sign-5adb9144d5b940.2758313015243390128754.jpg',
        iconSize: [30, 20]
        });

      for(let a = 0 ; a < this.arrayGlobal.length ; a++){

        var location = [this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud];
        var marker = L.marker([this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud],{icon: century21icon});
        marker.bindPopup(
          "<p>Ciudad:" + this.arrayGlobal[a].ciudad + "</p><p>Poblacion:" + this.arrayGlobal[a].poblacion + "</p><p>Total Ventas: "+ this.arrayGlobal[a].totalVentas +"€</p><p>Porcentaje Ventas: "+ this.arrayGlobal[a].porcentajeVentas +"</p>"
        );
        marker.addTo(map);

      }

    })

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  token = '5a4b8472-b95b-4687-8179-0ccb621c7990';
  layers = ["GASSTATIONS","PARCEL_HOKS", "KSHTANN_ASSETS", "bus_stops", "PARCEL_ALL"];
  constructor() { }

  ngOnInit(): void {
    this.createMap();
  }

  createMap() {
    govmap.createMap('map', {
      token: this.token,
      layers: this.layers,
      showXY: true,
      identifyOnClick: true,
      isEmbeddedToggle: false,
      background: "1",
      layersMode: 4,
      zoomButtons: false
    });
  }

}

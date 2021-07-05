import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  token = '5a4b8472-b95b-4687-8179-0ccb621c7990';
  layers = ["atractions", "cell_active", "GASSTATIONS", "bus_stops", "SUB_GUSH_ALL", "PARCEL_ALL", "Neighborhood", "statistic_areas", "hotels", "Emergancy_Hospitals", "POLICE_Yehida_Location"];
  constructor() { }

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

  setVisibleLayers(toAdd: string[], toRemove: string[]) {
    govmap.setVisibleLayers(toAdd, toRemove);
  }
}

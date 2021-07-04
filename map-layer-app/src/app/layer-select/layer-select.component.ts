import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-layer-select',
  templateUrl: './layer-select.component.html',
  styleUrls: ['./layer-select.component.css']
})
export class LayerSelectComponent implements OnInit {
  layers: string[] = [];
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.layers = this.mapService.layers;
  }

}

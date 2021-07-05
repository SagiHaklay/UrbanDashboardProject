import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-layer-select',
  templateUrl: './layer-select.component.html',
  styleUrls: ['./layer-select.component.css']
})
export class LayerSelectComponent implements OnInit {
  layers: string[] = [];
  isChecked: boolean[] = [];
  hebrewLayers = ["אטרקציות", "אנטנות סלולריות פעילות", "תחנות דלק", "תחנות אוטובוס", "גושים", "חלקות", "שכונות", "אזורים סטטיסטיים", "בתי מלון", "בתי חולים", "תחנות משטרה"];
  constructor(private mapService: MapService) { }

  ngOnInit(): void {
    this.layers = this.mapService.layers;
    for (let i = 0; i < this.layers.length; i++) {
      this.isChecked[i] = false;
    }
  }

  onChecked(index: number) {
    if (this.isChecked[index]) {
      console.log(this.layers[index] + ' was checked');
      this.mapService.setVisibleLayers([this.layers[index]], []);
    } else {
      console.log(this.layers[index] + ' was unchecked');
      this.mapService.setVisibleLayers([], [this.layers[index]]);
    }
  }

}

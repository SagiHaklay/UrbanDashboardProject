import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LayerSelectComponent } from './layer-select/layer-select.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LayerSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

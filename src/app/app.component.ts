import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseproject';
  loadedFeature = 'recipe';
  getNavigate(feature: any) {
    this.loadedFeature = feature;
    console.log(feature);
  }
}

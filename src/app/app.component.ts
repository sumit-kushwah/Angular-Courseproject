import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'courseproject';
  firstsubs: Subscription;
  ngOnInit() {
   
  }
  ngOnDestroy() {
  
  }

}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ClockComponent } from './clock/clock.component';
import { Anchor } from './anchor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Exercise';
  header = new   HeaderComponent();
  anchors = [
     { text: 'google', link :'http://www.google.com', target: "_blank"},
     { text: 'microsoft', link :'http://www.microsoft.com', target: "_self"},
     { text: 'yahoo', link :'http://www.yahoo.com', target:"_parent"}
  	];
   anchors2 = [
     { text: 'google', link :'http://www.google.com'},
     { text: 'yahoo', link :'http://www.yahoo.com'}
  	];
  anchors3 = [
     { text: 'yahoo', link :'http://www.yahoo.com'}
  	];
  ngOnInit() {
  }

}

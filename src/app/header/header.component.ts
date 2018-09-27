import { Component, OnInit, Input } from '@angular/core';
import { Anchor } from '../anchor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	 @Input() headerAnchors : Anchor[];

  constructor() {
   }

  ngOnInit() {
  }

  getTarget(anchor: Anchor) {

    console.log(anchor.text + " " + anchor.target);
    
    if (anchor.target) {
      return anchor.target;
    }
    
     return "_blank";
  }

}

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

}

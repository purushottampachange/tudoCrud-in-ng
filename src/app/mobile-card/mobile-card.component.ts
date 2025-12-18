import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from '../model/mobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {

 @Input()mobile !: Imobile; 

  constructor() { }

  ngOnInit(): void {
  }

}

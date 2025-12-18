import { Component, OnInit } from '@angular/core';
import { Imobile } from '../model/mobile';
import { mobileProducts } from '../consts/data';

@Component({
  selector: 'app-mobile-dash',
  templateUrl: './mobile-dash.component.html',
  styleUrls: ['./mobile-dash.component.scss']
})
export class MobileDashComponent implements OnInit {

  mobArr : Array<Imobile> = mobileProducts;
 
  ngOnInit(): void {
  }

}

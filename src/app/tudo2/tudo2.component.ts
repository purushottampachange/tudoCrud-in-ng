import { Component, OnInit } from '@angular/core';
import { Itudo } from '../model/tudo';

@Component({
  selector: 'app-tudo2',
  templateUrl: './tudo2.component.html',
  styleUrls: ['./tudo2.component.scss']
})
export class Tudo2Component implements OnInit {

  tudoArr: Array<Itudo> = [

    { tudoId: "1", tudoItem: 'Learn JavaScript basics' },
    { tudoId: "2", tudoItem: 'Understand ES6 features' },
    { tudoId: "3", tudoItem: 'Practice TypeScript types' },
    { tudoId: "4", tudoItem: 'Learn Angular components' },
    { tudoId: "5", tudoItem: 'Build Tudo application' }

  ]

  isEditMode : boolean = false;

  ngOnInit(): void {
  }

}

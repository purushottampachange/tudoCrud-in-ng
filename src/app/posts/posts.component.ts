import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../model/post';
import { postArr } from '../consts/data';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postArr : Array<Ipost> = postArr;

  constructor() { }

  ngOnInit(): void {
  }

}

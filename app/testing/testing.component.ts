import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  caption = "The full caption text";
  image = "/assets/userdoc/mmst5/images/030-10-2104-00A-fig5.png";
  //legend:string[];

  public legend:string[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7'];
  
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {

  @Input() public caption?;
  @Input() public image?;
  @Input() public legend?;

  
  
  constructor() { }

  ngOnInit() {
    console.log("caption: "+this.caption);
  }

}

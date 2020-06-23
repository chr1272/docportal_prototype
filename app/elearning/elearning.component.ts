import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ElearningService } from '../elearning.service';
import { IElearning } from '../interfaces/IElearning';
import { MatTableDataSource } from '@angular/material/table';

var ELEMENT_DATA: IElearning[] = [
  {id: 0, title: '', domain:'', url: ''},
];

@Component({
  selector: 'app-elearning',
  templateUrl: './elearning.component.html',
  styleUrls: ['./elearning.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ElearningComponent implements OnInit {

  public elearnings = [];
  constructor(private _elearningService:ElearningService) { }

  displayedColumns: string[] = ['title', 'domain'];
  dataSource = []; 
  /*
  ngOnInit() {
    this._elearningService.getElearnings()
    .subscribe(data => this.dataSource = data); 
  }*/
  ngOnInit() {
    this._elearningService.getElearnings()
    .subscribe(data => this.elearnings = data); 
  }

  
  
 
} 


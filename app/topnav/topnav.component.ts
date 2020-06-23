import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TopnavComponent implements OnInit {

  @Input() search:string;
  searchterm:string;

  constructor(private _router: Router) { }

  gotoSection(section:string) {
    this._router.navigate([section]);
  }

  ngOnInit() {
  }

}

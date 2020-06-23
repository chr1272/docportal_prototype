import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserdocService } from '../userdoc.service';
import { IUserdoc } from '../interfaces/IUserdoc';
import {Router } from '@angular/router'


@Component({
  selector: 'app-userdoc',
  templateUrl: './userdoc.component.html',
  styleUrls: ['./userdoc.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserdocComponent implements OnInit {

  public userdocs:any;
  constructor(private _userdocService:UserdocService, private router:Router) { }

  ngOnInit() {
    this._userdocService.getUserdocs()
    .subscribe(data => {
      this.userdocs = data;
    });
  }

  gotoDoc(id:number) { 
    this.router.navigate(['/documentation', id])
  }
} 

import { Component, OnInit, Input } from '@angular/core';
import {LoginstateService} from '../loginstate.service';
import { ILoginstate } from '../interfaces/ILoginstate';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @Input() search:string;
  searchterm:string;
  loginstate:ILoginstate;
  constructor(private _loginserv:LoginstateService) {}

  ngOnInit() {
    this.loginstate = this._loginserv.getloginstate();
    console.log(this.loginstate.loggedin);    
  }

  

}
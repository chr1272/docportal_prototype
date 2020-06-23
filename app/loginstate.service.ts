import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ILoginstate } from './interfaces/ILoginstate';

@Injectable({
  providedIn: 'root'
})
export class LoginstateService {

  lost:ILoginstate;
  user: string;
  loggedin:boolean;
  
 


  constructor() { }

  getloginstate() {
    if (!this.user) { 
      this.user = "anonymous"; 
      this.loggedin = false;
      localStorage.setItem('user', this.user);
      localStorage.setItem('loggedin', this.loggedin.toString());
    }
    console.log(this.user);
    this.user = localStorage.getItem('user');
    this.loggedin = (/true/i).test(localStorage.getItem('loggedin'));
    var list:ILoginstate = {loggedin:false, user:'anonymous'};
    list.loggedin = this.loggedin;
    list.user = this.user;
    this.lost = list;
    return this.lost;
    
  }
 

  setloginstate(name:string, loginstate:boolean) {
    console.log(loginstate);
    this.loggedin = loginstate;
    this.user = name;
    localStorage.setItem('user', this.user);
    localStorage.setItem('loggedin', this.loggedin.toString());
  }
}
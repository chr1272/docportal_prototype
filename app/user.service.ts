import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './interfaces/user';

@Injectable()
export class UserService {

  private _url: string = "https://localhost:44357/api/user";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._url);
  }
}

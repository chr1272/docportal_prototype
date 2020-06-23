import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IElearning } from './interfaces/IElearning';

@Injectable({
  providedIn: 'root'
})
export class ElearningService {

  private _url: string = "https://localhost:44357/api/elearning";

  constructor(private http: HttpClient) { }
  getElearnings(): Observable<IElearning[]>{
    return this.http.get<IElearning[]>(this._url);

  }
}

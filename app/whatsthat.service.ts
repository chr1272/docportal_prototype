import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IWhatsthat } from './interfaces/IWhatsthat';

@Injectable({
  providedIn: 'root'
})
export class WhatsthatService {
  private _url: string = "https://localhost:44357/api/whatsthat";

  constructor(private http: HttpClient) { }
  getWhatsthats(): Observable<IWhatsthat[]>{
    return this.http.get<IWhatsthat[]>(this._url);
  }
}
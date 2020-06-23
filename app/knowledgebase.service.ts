import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IKbarticle } from './interfaces/IKbarticle';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class KnowledgebaseService {

  private _url: string = "./assets/data/kbarticles.json";

  constructor(private http: HttpClient) { }

  getKbarticles(): Observable<IKbarticle[]>{
    return this.http.get<IKbarticle[]>(this._url);
  }
}

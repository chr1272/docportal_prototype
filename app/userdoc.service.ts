import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Chapter, link } from './interfaces/index';
import { topic } from './interfaces/topic';
import { IUserdoc } from './interfaces/IUserdoc';
import { globals } from '../assets/data/globals';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class UserdocService {

  public currentDoc:string;
  
  constructor(private http: HttpClient) { }
  getUserdocs(): Observable<IUserdoc[]>{
    return this.http.get<IUserdoc[]>('./assets/userdoc/docs.json');
  }
  getUserdocbyId(id:number): any{
    this.http.get<IUserdoc[]>('./assets/userdoc/docs.json').subscribe( 
      x => {
        console.log('servicelog: ' + x.filter( y => y.id === id)[0].title)
        return x.filter( y => y.id === id);
    });
  }

  getToc(indexfile:string): Observable<Chapter[]> {
    return this.http.get<Chapter[]>('./assets/userdoc/'+indexfile);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error");
  }
/*
  getHtmlfile(htmlfile:string, docpath:string):Observable<string> {
    return this.http.get('./assets/userdoc/'+docpath+'/'+htmlfile, {responseType: 'text'});
  }
*/
  private topicurl = "https://localhost:44357/api/topic/";
  getTopic(docfolder:string, docpath:string, docfile:string):Observable<topic> {
    return this.http.get<topic>(this.topicurl + docfolder +  docpath+'/'+docfile);
  }

  //get/set globals
  getGlobals(id:number):Observable<globals> {
    return this.http.get<globals>("https://localhost:44357/api/globals/"+id);
  }
  setGlobals(globs:globals) {
    this.http.put("https://localhost:44357/api/globals/"+globs.id, globs);
  }
}
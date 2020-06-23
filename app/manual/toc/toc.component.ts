import { Component, ChangeDetectorRef , OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { UserdocService } from 'src/app/userdoc.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { Chapter, link } from '../../interfaces/index';
import { IUserdoc } from '../../interfaces/IUserdoc';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.component.html',
  styleUrls: ['./toc.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TocComponent  {

  public indexfile:string;
  
//  @Output() htmloutput = new EventEmitter<string>();
  
  events: string[] = [];
  opened: boolean;

  @Input() docid:number;
  public currentUrl:string;
  public docfolder:string;
  treeControl = new NestedTreeControl<Chapter>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Chapter>();
  activeNode: any;
  constructor(private _userdocService:UserdocService, private _router: Router, private _route: ActivatedRoute) {}

 

  hasChild = (_: number, node: Chapter) => !!node.children && node.children.length > 0;
  ngOnInit() {
    
    let docu:IUserdoc = new IUserdoc;
    this._userdocService.getUserdocs()
      .subscribe(data => {
        for (var i=0;i<data.length;i++){
          if (data[i].id === this.docid) {
            docu.id = data[i].id; 
            docu.index = data[i].index;
            docu.title = data[i].title;
            docu.type = data[i].type;
            docu.shortdesc = data[i].shortdesc;
          }
        } 
        
        this.indexfile = docu.index;

        this._userdocService.getToc(this.indexfile)
          .subscribe({
            next: data => {
            this.dataSource.data = data;
            //this.dataSource.data = [...this.dataSource.data, data];        
          }
        });
      });    
  }
  
  gotoTopic(id:string, file:string) {
    console.log('docid route: '+id);
    console.log('file route: '+file);
    
    this._router.navigate(['documentation', id, file]).then( (e) =>{
      if (e) {
        console.log("Navigation success");
      }
      else {
        console.log("Navigation failure");
      }
    });
  }
/*
  ngOnChanges(changes) {
    if (changes.indexfile) {
     
    }
   
  }
*/

/*
  // display htmlfile
  loadHtml(filepath:string) {
    let docfolder = this.indexfile.split('/')[0];
    
    let newpath = "";
    let docfile = "";
    if (filepath.indexOf("/") != -1) {
      let docpath = filepath.split('/');
      let dplength = docpath.length;
      for (var i=0;i<dplength-1;i++) {
        newpath = newpath+"::"+newpath[i]
      }
      docfile = docpath[dplength-1];
    }
    else {
      docfile = filepath;
    }
    
    docfolder = docfolder +  newpath;
    filepath = filepath.replace("/", "::");
    this._userdocService.getTopic(docfolder, docfile)
      .subscribe(data => {
        /*this.htmlstring = data as string;
        this.htmlstring = this.htmlstring.replace(/images/g, "/assets/userdoc/"+docfolder+"/images");
        this.htmlstring = this.htmlstring.split("<main")[1];
        this.htmlstring = "<main "+ this.htmlstring.split("</main>")[0];
        //this.htmlstring = this.chtmlstring.replace('images', '/assets/userdoc/'+docfolder+'/images');
        console.log('replaced html: '+this.htmlstring);*4/
        console.log(data.path);
        this.htmlstring = data.ahtml;
      });
      /*var HtmlParser = require('node-html-parser');
      var htmlchunk = HtmlParser.parse(this.htmlstring);
      var links = htmlchunk.querySelector('a');
      return this.htmlstring;
  }

  getul(ul:any) {
    this.thisul = ul;
  }
*/
}
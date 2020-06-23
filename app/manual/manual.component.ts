import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserdocService } from '../userdoc.service';
import { IUserdoc } from '../interfaces/IUserdoc';
import { globals, myObserver } from '../../assets/data/globals';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
  styleUrls: ['./manual.component.scss']
})
export class ManualComponent implements OnInit {

  public docid;
  public url:any;
  public docs:IUserdoc[];
  @Output() docu:IUserdoc = new IUserdoc;
  public docfolder:string;
  @Output() did:number;
  @Output() doc:string;
  @Output() docf:string ="mobile phone";
  

  public file:string;
  
  constructor(private router:Router, private route:ActivatedRoute, private _userdocService:UserdocService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.docid = id;
    this.did = id;
    this.route.params.subscribe(x=> {
      this.doc = x.file;
      console.log('MC: updated selected doc');
    })
    if (this.route.params.subscribe(x => x.file != null)) {
      this.url = this.route.paramMap.subscribe(x => {
        this.url = x;
        console.log('MC: subscribe'+this.route.snapshot.paramMap.get('file'));
      });
    }
    else {
      this.url = "cover";
    }
    
    
    this._userdocService.getUserdocs()
      .subscribe({next: data => {
        this.docs = data;
        for (var i=0;i<data.length;i++){
          if (data[i].id === this.docid) {
            this.docu.id = data[i].id; 
            this.docu.index = data[i].index;
            this.docu.title = data[i].title;
            this.docu.type = data[i].type;
            this.docf = data[i].index;
          }
        } 
        console.log('title: '+this.docu.title + '-' + this.docu.type);
        this.docfolder = this.docu.index.split('/')[0];
        /*let gl = new globals();
        gl.id=2;
        gl.Valuestring=this.docfolder;
        gl.Valueint = this.docid;
        this._userdocService.setGlobals(gl);*/
      },
      complete:() => console.log("MC: manual loading complete.")
    });
      
    
  
    }

    ngOnChanges(changes) {
      if (changes.route) {

      }
    }


  
}

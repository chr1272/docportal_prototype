import { Component, OnInit, Input, Host } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdocService } from '../../userdoc.service';
import { IUserdoc } from '../../interfaces/IUserdoc';
import { ManualComponent } from '../manual.component';

@Component({
  selector: 'app-htmldoc',
  templateUrl: './htmldoc.component.html',
  styleUrls: ['./htmldoc.component.scss']
})
export class HtmldocComponent implements OnInit {

  @Input() doc:string;
  @Input() docf:string;
  public docid;
  public docfolder:string; 
  public htmlstring:string;
  public file:string;
  public docu:IUserdoc;

  constructor(private route:ActivatedRoute, private _userdocService:UserdocService, @Host() parent: ManualComponent) { 
   // this.docfolder = parent.docfolder;
  }

  ngOnInit() {
    
    console.log('HC: HTML component loaded' + this.docf);
    //this._userdocService.getGlobals(2).subscribe( data => {this.docfolder = data.Valuestring});
    //let file = this.route.snapshot.paramMap.get('file');
    this.route.params.subscribe(data => {
      this.file = data.file;
      this.docid = data.id;
      console.log('file htmldoc: '+data.file);
    
      
          
          
          this.docfolder = this.docf.split('/')[0];
          console.log('HC: docfolder?' +this.docfolder);

          let newpath = "";
          let docfile = "";
          if (this.file != null) {
            if (this.file.indexOf("::") != -1) {
              let docpath = this.file.split('::');
              let dplength = docpath.length;
              for (var i=0;i<dplength-1;i++) {
                newpath = newpath+"::"+docpath[i]
              }
              
              docfile = docpath[dplength-1];
            }
            else {
              docfile = this.file;
            }

            console.log('HC: getTopic: '+this.docfolder+ newpath+"/"+ docfile);
        
          // docfolder = docfolder +  newpath;
            //filepath = filepath.replace("/", "::");
            this._userdocService.getTopic(this.docfolder, newpath, docfile)
              .subscribe(data => {
                this.htmlstring = data.ahtml as string;
                console.log('ahtml: '+data.ahtml);
              });
          }
          
          
        
      
    
    });
    
  }

  ngOnChanges(changes) {
    if (changes.doc) {
    
    }
  }
}

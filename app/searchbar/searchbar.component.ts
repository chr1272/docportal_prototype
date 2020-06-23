import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {LoginstateService} from '../loginstate.service';
import { ILoginstate } from '../interfaces/ILoginstate';
import { WhatsthatService } from '../whatsthat.service';
import { IWhatsthat } from '../interfaces/IWhatsthat';

export interface Search {
  name: string;

}

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  
  userdoc = true;
  elearn = true;
  incidents = true;
  knowba = true;
  whatsthat = true;

  //search
  @Output() changeTerm = new EventEmitter();
  updateTerm() {
    this.changeTerm.emit();
  }


  loginstate:ILoginstate;
  what:IWhatsthat;
  myControl = new FormControl();
  options: IWhatsthat[] = [
    {id: 0, term: '', desc: ''}
  ];
  filteredOptions: Observable<IWhatsthat[]>;
  constructor(public _whatsservice:WhatsthatService){}
  ngOnInit() {
   this._whatsservice.getWhatsthats()
      .subscribe(data => this.options = data);

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.term),
        map(term => term ? this._filter(term) : this.options.slice())
      );


      
        
      
  }

  displayFn(search?: IWhatsthat): string | undefined {
    return search ? search.term : undefined;
  }

  private _filter(term: string): IWhatsthat[] {
    const filterValue = term.toLowerCase();

    return this.options.filter(option => option.term.toLowerCase().indexOf(filterValue) === 0);
  }

  toggleDisplay(item:string){
    var x = document.getElementById(item);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
}
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { WhatsthatService } from '../whatsthat.service';

@Component({
  selector: 'app-whatsthat',
  templateUrl: './whatsthat.component.html',
  styleUrls: ['./whatsthat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WhatsthatComponent implements OnInit {

  public whatsthats = [];
  @Input() searchterm:string;
  constructor(private _whatsthatService:WhatsthatService) { }

  ngOnInit() {
    this._whatsthatService.getWhatsthats()
    .subscribe(data => this.whatsthats = data);
  }

}

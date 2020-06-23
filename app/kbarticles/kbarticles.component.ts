import { Component, OnInit } from '@angular/core';
import { KnowledgebaseService } from '../knowledgebase.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-kbarticles',
  templateUrl: './kbarticles.component.html',
  styleUrls: ['./kbarticles.component.scss']
})
export class KbarticlesComponent implements OnInit {

  public kbarticles = [];
  
  constructor(private _knowledgebaseService: KnowledgebaseService, private _userservice: UserService) { }

  ngOnInit() {
    this._knowledgebaseService.getKbarticles()
        .subscribe(data => this.kbarticles = data);
  }

}

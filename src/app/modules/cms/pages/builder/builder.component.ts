import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  private apiSearch: string = null;
  private resultSearch: null;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  private searchApi() {
      if (this.apiSearch.length < 2) {
        return;
      }

      this.api.get(`registry/search?query=${this.apiSearch}`).toPromise().then(res => {
        console.log(JSON.parse(res).results);
        this.resultSearch = JSON.parse(res).results;
      });
  }
}

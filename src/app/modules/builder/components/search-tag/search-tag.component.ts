import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';

@Component({
  selector: 'app-builder-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  @Input() imageName: string;
  @Output() next = new EventEmitter();

  public tags = null;
  public searchedTag = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.tagName = '';
    this.api.get(`registry/tag?query=${encodeURIComponent(this.imageName)}`).toPromise().then(res => {
      this.tags = JSON.parse(res).tags;
    });
  }

  public handleNext(value: string): void {
    this.next.emit(value);
  }

  public searchTag(): void {
    this.searchedTag = this.tags.filter(val => val.includes(this.tagName));
  }
}

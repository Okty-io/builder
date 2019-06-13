import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-builder-search-tag',
  templateUrl: './search-tag.component.html',
  styleUrls: ['./search-tag.component.scss']
})
export class SearchTagComponent implements OnInit {

  public tagName: string;
  @Input() imageName: string;
  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.tagName = '';
  }

  public handleNext(): void {
    this.next.emit(this.tagName);
  }

}

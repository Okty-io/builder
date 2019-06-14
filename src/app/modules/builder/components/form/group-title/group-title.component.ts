import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder-form-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.scss']
})
export class GroupTitleComponent implements OnInit {

  @Input() public label: string;

  constructor() {
  }

  ngOnInit() {
  }

}

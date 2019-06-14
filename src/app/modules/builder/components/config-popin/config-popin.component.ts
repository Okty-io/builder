import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-builder-config-popin',
  templateUrl: './config-popin.component.html',
  styleUrls: ['./config-popin.component.scss']
})
export class ConfigPopinComponent implements OnInit {

  @Input() isActive: boolean;
  constructor() { }

  ngOnInit() {
    this.isActive = false;
  }

}

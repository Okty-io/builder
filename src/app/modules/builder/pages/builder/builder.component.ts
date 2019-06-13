import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public image: string;
  public tag: string;

  constructor() { }

  ngOnInit() {
    this.image = '';
    this.tag = '';
  }

  public handleImage(name: string): void {
    this.image = name;
  }
  public handleTag(tag: string): void {
    this.tag = tag;
  }
}

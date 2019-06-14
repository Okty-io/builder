import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public image: string;
  public tag: string;
  public logo: string;

  constructor() { }

  ngOnInit() {
    this.image = '';
    this.tag = '';
    this.logo = '';
  }

  public handleImage(image: {label: string, logo: string}): void {
    this.image = image.label;
    this.logo = image.logo;
  }
  public handleTag(tag: string): void {
    this.tag = tag;
  }
}

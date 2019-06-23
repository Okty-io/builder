import { Component, OnInit } from '@angular/core';
import { ContainerConfigGroup } from '../../models/container-config-group';
import { TitleService } from '../../../../core/services/title.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {

  public image: string;
  public tag: string;
  public logo: string;
  public review: boolean;

  public config: ContainerConfigGroup[];

  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.image = '';
    this.tag = '';
    this.logo = '';
    this.review = false;

    this.titleService.set('Choose image');
  }

  public handleImage(image: { label: string, logo: string }): void {
    this.image = image.label;
    this.logo = image.logo;
  }

  public handleTag(tag: string): void {
    this.tag = tag;
  }

  public handleReview(config: ContainerConfigGroup[]): void {
    this.review = true;
    this.config = config;
  }

  public goToEdit() {
    this.review = false;
    this.config = [];
  }
}

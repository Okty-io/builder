import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './pages/builder/builder.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ConfigComponent } from './components/config/config.component';
import { StepsComponent } from './components/steps/steps.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchTagComponent } from './components/search-tag/search-tag.component';

@NgModule({
  declarations: [
    BuilderComponent,
    SearchComponent,
    ConfigComponent,
    StepsComponent,
    CardComponent,
    SearchTagComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class BuilderModule { }

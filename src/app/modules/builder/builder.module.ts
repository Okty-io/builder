import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './pages/builder/builder.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ConfigComponent } from './components/config/config.component';

@NgModule({
  declarations: [
    BuilderComponent,
    SearchComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    FormsModule
  ]
})
export class BuilderModule { }

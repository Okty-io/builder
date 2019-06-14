import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './pages/builder/builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewComponent } from './components/preview/preview.component';
import { SearchImageComponent } from './components/search-image/search-image.component';
import { ConfigComponent } from './components/config/config.component';
import { StepsComponent } from './components/steps/steps.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../../shared/shared.module';
import { SearchTagComponent } from './components/search-tag/search-tag.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightModule } from 'ngx-highlightjs';
import { ConfigPopinComponent } from './components/config-popin/config-popin.component';
import { ReviewComponent } from './components/review/review.component';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './components/fields/input/input.component';
import { VoidComponent } from './components/fields/void/void.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { OnlyVisibleFieldPipe } from './directives/only-visible-field.pipe';
import { GroupTitleComponent } from './components/form/group-title/group-title.component';
import { NewComponent } from './components/fields/new/new.component';

@NgModule({
  declarations: [
    BuilderComponent,
    PreviewComponent,
    SearchImageComponent,
    ConfigComponent,
    StepsComponent,
    CardComponent,
    SearchTagComponent,
    ReviewComponent,
    ConfigPopinComponent,
    FormComponent,
    InputComponent,
    VoidComponent,
    FormFieldDirective,
    OnlyVisibleFieldPipe,
    GroupTitleComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    FormsModule,
    SharedModule,
    FontAwesomeModule,
    HighlightModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    InputComponent,
  ]
})
export class BuilderModule {
}

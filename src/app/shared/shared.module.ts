import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button.component';
import { LoaderComponent } from './components/loader.component';

@NgModule({
    declarations: [
        ButtonComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ButtonComponent,
        LoaderComponent
    ]
})
export class SharedModule {
}

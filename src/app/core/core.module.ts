import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IsLoggedIn } from './guards/isLoggedIn';
import { IsNotLoggedIn } from './guards/isNotLoggedIn';

@NgModule({
    declarations: [
        FooterComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([]),
    ],
    providers: [
        IsLoggedIn,
        IsNotLoggedIn
    ],
    exports: [
        FooterComponent,
        NavbarComponent
    ]
})
export class CoreModule {
}

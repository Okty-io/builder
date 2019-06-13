import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'builder',
        loadChildren: './modules/builder/builder.module#BuilderModule'
    },
    {
        path: '',
        loadChildren: './modules/cms/cms.module#CmsModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { DemoComponent } from './demo/demo.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';

const ROUTES: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'demo',
  },
  {
    path:'demo',
    component:DemoComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'forms',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'template',
      },
      {
        path:'template',
        component:TemplateDrivenComponent,
      },
      {
        path:'model',
        component:ModelDrivenComponent,
      }
    ]
  },
  {
    path:'**',
    component:ErrorPageComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }

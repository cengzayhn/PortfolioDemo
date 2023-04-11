import { FirstPageComponent } from './components/first-page/first-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './components/test-page/test-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';

const routes: Routes = [
  {path:'',component:TestPageComponent,children:[
    {path:'page-1',component:FirstPageComponent},
    {path:'page-2',component:SecondPageComponent},
    {path:'page-3',component:ThirdPageComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    component: AboutComponent,
    path: 'about',
    children:[
      {
        path:'company',
        component: AboutCompanyComponent
      },
      {
        path:'me',
        component: AboutMeComponent,
      },
    ],
  },
  {
    component: UserComponent,
    path: 'user/:id', // Move this route up
  },
  {
    component: HomeComponent,
    path: '', // This should typically be the last route
  },
  {
    component: NoPageComponent,
    path: '**', // This should typically be the last route
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

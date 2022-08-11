import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing/landing.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { UserComponent } from './components/user/user/user.component';

const routes: Routes = [
  {
  path: 'Signup',
  component: UserComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'Home',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

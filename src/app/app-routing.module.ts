import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FirstprojectComponent } from './firstproject/firstproject.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [{path:"", redirectTo: "firstProject/home",pathMatch:"full"},
{
  path: "firstProject", component: FirstprojectComponent,
  children: [
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "team", component: TeamComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

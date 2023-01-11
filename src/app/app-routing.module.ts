import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AboutComponent } from './layouts/about/about.component';
import { HomeComponent } from './layouts/home/home.component';
import { ResumeComponent } from './layouts/resume/resume.component';
import { WorksComponent } from './layouts/works/works.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/accueil/home', pathMatch:'full'},  
  {
    path: 'accueil', 
    component: AccueilComponent,
    children:[
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'resume', component: ResumeComponent},
      { path: 'works', component: WorksComponent}
    ],
  },
  {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { ManualComponent } from './manual/manual.component';
import { UserdocComponent } from './userdoc/userdoc.component';
import { TestingComponent } from './testing/testing.component';
import { HtmldocComponent } from './manual/htmldoc/htmldoc.component';



const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'documentation', component: UserdocComponent },
  { path: 'documentation/:id', component: ManualComponent,
  /*  children: [
      {path: ':file', 
      component: HtmldocComponent}
    ]
  */},
  { path: 'documentation/:id/:file', component:ManualComponent},
  { path: 'test', component: TestingComponent },
  { path: "**", component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 

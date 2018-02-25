import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ChildCardComponent } from '../app/main/child-card/child-card.component';
import { MainComponent } from '../app/main/main.component';
import { GroupMainComponent } from './main/group-main/group-main.component';
 
const  routes: Routes= [
  {path: '',component: MainComponent},
  {path: 'child',component: ChildCardComponent},
  {path: 'group-main',component: GroupMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
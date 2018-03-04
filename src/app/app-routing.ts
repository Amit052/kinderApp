import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { ChildCardComponent } from '../app/main/child-card/child-card.component';
import { MainComponent } from '../app/main/main.component';
import { GroupMainComponent } from './main/group-main/group-main.component';
import { MAIN_ROUTES } from './main/main.routes';
 
const  routes: Routes= [
  {path: '',component: MainComponent,children: MAIN_ROUTES},
  {path: 'child',component: ChildCardComponent},
  {path: 'group-main',component: GroupMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
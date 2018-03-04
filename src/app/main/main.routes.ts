import {Routes} from "@angular/router";
import { ChildCardComponent } from './child-card/child-card.component';
import { MainPanelComponent } from './main-panel/main-panel.component';

export  const   MAIN_ROUTES: Routes = [
  {path: 'child-view',component: ChildCardComponent},
  {path: 'main-view',component: MainPanelComponent}
];

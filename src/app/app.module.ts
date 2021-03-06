import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule}  from '../app/app-routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LeftPanelComponent } from './main/main-panel/left-panel/left-panel.component';
import { LeftGroupComponent } from './main/main-panel/left-panel/left-group/leftgroup.component';
import { MainPanelComponent } from './main/main-panel/main-panel.component';
import { ChildComponent } from './main/main-panel/child/child.component';
import { ChildCardComponent } from './main/child-card/child-card.component';
import { GroupComponent } from './main/main-panel/group/group.component';
import { GroupMainComponent } from './main/group-main/group-main.component';
import { SideBarComponent } from './main/side-bar/side-bar.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LeftPanelComponent,
    LeftGroupComponent,
    MainPanelComponent,
    ChildComponent,
    ChildCardComponent,
    GroupComponent,
    GroupMainComponent,
    SideBarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

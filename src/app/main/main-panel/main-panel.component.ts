import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
private viewOption: boolean = true;
  constructor() { }

  ngOnInit() {
  }

onChangeView(event){
  if(event.target.value == 1)
 this.viewOption = true;
 else
 this.viewOption = false;
}
}

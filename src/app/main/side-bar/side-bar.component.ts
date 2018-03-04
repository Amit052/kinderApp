import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private logo: string = "../assets/hamburger.png";
  private menuOn:boolean = false;
  constructor() { }

  ngOnInit() {
  }
openMenu(){
  this.menuOn = !this.menuOn;
 // console.log(menuOn);
}
}

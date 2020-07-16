import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  value:string="true";
  ok:boolean;
  public val:string='';
  loggedIn=true;
  loginName:string='Shubham';
  //for dropdown
  forloggedinuser=['Profile','My Chat','My Residence','Plans','support']
  constructor() { }

  ngOnInit(): void {
  }
  click2(){
    console.log(this.val);
  }
  onClicked(){

  }
  onChange(){
    console.log(this.val)
  }
}

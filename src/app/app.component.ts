import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'AngularTrails';
  
  menuItemId:number;
  menuclick(itemId:MenuItems):void{
    this.menuItemId= itemId;
  }
  constructor() { }
  ngOnInit(): void {
    this.menuItemId= 1;
  }

}

export enum MenuItems{
  Home = 1,
  other

}

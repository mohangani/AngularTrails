import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  list: string[] = [];



  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 50; index++) {
      this.list.push(index+"");
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ihuman } from './ihuman';


@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  TestObj:ihuman ={
    name: "Mohan",
    age:25,
    gender:"Male"
  }

  constructor() {}

  ngOnInit(): void {}

}

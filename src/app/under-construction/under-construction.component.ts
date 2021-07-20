import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})
export class UnderConstructionComponent implements OnInit {

  imgSrc = "./assets/images/underconstruction1.png";
  //imgSrc = "../../Images/underconstruction.jpg";
  //imgSrc = "./src/assets/underconstruction.jpg";

  constructor() { }
  ngOnInit(): void {
  }


}

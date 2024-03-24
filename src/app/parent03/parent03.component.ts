import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent03',
  templateUrl: './parent03.component.html',
  styleUrls: ['./parent03.component.css']
})
export class Parent03Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  receiveParentMassage(mass:string){
    console.log(mass);

  }
}

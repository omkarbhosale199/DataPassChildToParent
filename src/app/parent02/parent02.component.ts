import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent02',
  templateUrl: './parent02.component.html',
  styleUrls: ['./parent02.component.css']
})
export class Parent02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //step 4
  receiveMassageFromChild02(massage:string){
 console.log(`${massage} --->>> this massage receive from child02`);

  }
}

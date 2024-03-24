import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent01',
  templateUrl: './parent01.component.html',
  styleUrls: ['./parent01.component.css']
})
export class Parent01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

// Step 3

receiveMassage(message:any){
 console.log("massage receive from child01 is",message);

}
}

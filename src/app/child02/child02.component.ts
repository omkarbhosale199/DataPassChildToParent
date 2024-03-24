import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child02',
  templateUrl: './child02.component.html',
  styleUrls: ['./child02.component.css']
})
export class Child02Component implements OnInit {
  // step 1
  data:string=`abc`
  //step 2
@Output() massageForParent02 = new EventEmitter <string> ()

  constructor() { }

  ngOnInit(): void {
  }
  // step 6
  displayMassageIs(){
    this.massageForParent02.emit(this.data)
    //refrance variable of event emitter.method.(refrance of variable)
}
      }




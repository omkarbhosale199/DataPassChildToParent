import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child03',
  templateUrl: './child03.component.html',
  styleUrls: ['./child03.component.css']
})
export class Child03Component implements OnInit {
//step 1
  data:string="Your time is limited, don't waste it living someone else's life.- Steve Jobs"
  //step 2
@Output()  sendingData = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
 // step 6
//data that pass to parent wrote in method
showMassage(){
  this.sendingData.emit(this.data);
  // refrance variable of event emitter.method.(refrance of variable)
}

}

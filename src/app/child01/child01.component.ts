import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child01',
  templateUrl:'./child01.component.html',
  styleUrls: ['./child01.component.css']
})
export class Child01Component implements OnInit {
// Step 1
@Output() childMassageToParent= new EventEmitter <any> ()
// @Output() name= new EventEmitter<any>()
// new create instance of class -->> (Child01Component)
// EventEmitter emit events
//( EventEmitter create custom event)
// events = user perform some action on application (PC or Laptop browser) such as predefined event click,hover,focus,input etc. or custom event
// whenever event call by user then method are call by event ex- (click)="anyMethod()" but we use custom event -->> (childMassageToParent)
//<any> it is data type it may be string ,number,boolean
  constructor() { }

  ngOnInit(): void {
  }

  //step 5
  sendMassage(){
    this.childMassageToParent.emit("Doing practice every Day of all concept")
    //   name of emitted event --->> childMassageToParent
  }
}

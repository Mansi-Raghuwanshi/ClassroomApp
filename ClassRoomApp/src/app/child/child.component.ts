
import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() parentEmittor = new EventEmitter();
  count=0;

  constructor() { }
debugger;
  eventEmittedOnCount(){
    this.count = this.count +1;
    this.parentEmittor.emit(this.count);
  }

  ngOnInit() {
  }

  

}

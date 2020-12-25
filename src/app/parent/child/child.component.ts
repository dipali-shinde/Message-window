
import { Component, OnInit } from '@angular/core';
import { communicationService } from 'src/app/communication.service';
import { Message } from 'src/app/message.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private communicationService : communicationService) { }
   Message : Message[];
   newmessage;

  ngOnInit() {
    this.Message = this.communicationService.getMessage();
    this.newmessage = this.communicationService.newmessage.subscribe(
      (newmessage : Message[]) =>{
        this.Message = newmessage;
      }   
    )
  }

  ngOnDestroy(){
    this.newmessage.unsubscribe();
  }

}

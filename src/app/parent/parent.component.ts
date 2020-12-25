import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { communicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private communicationService : communicationService) { }

  ngOnInit() {
  }
  
  onsendMessage(messageForm : NgForm){
    const formvalues = messageForm.value;
    this.communicationService.sendMessage(formvalues);
  }

}

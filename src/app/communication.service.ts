import { Injectable } from "@angular/core";
import { EventEmitter } from "events";
import { Subject } from "rxjs";
import { Message } from "./message.model";

@Injectable()
export class communicationService {
  newmessage = new Subject<Message[]>();
  private Message : Message[] =[
    new Message('Parent component','All messages below are set from parent component & showed in child component'),
   ];
  
 getMessage(){
    return this.Message.slice();
 }
  sendMessage(message : Message){
    this.Message.push(message);
    this.newmessage.next(this.Message.slice());
  }
}
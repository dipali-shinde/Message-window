export class Message{
    public from : string;
    public messageContent : string;
    constructor(from : string, messageContent : string){
        this.from = from;
        this.messageContent = messageContent;
    }
}
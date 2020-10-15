import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, AfterViewChecked  {

  @Input() messages;
  @Input() currentUser;
  @Input() currentUserList;

  @Output() onMessageSent = new EventEmitter();
  @ViewChild('textInput') textInput :ElementRef;
  @ViewChild('scrollDown') scrollDown :ElementRef;
  

  public messageInput= '';


  constructor() { }

  ngOnInit(): void {
    this.scrollToBottom();
  }
  
  ngAfterViewChecked() {   
    this.scrollToBottom();        
  } 

  isCurrentUserInRoom(){
    let user = this.currentUserList.users.filter(id => id === this.currentUser.id);
    return user.length > 0 ;
  }


  onSendMessageClicked() {

    if(this.messageInput.length > 0) {
  
      console.log(this.messageInput)
      this.onMessageSent.emit(this.messageInput);
      this.textInput.nativeElement.value = '';
      this.messageInput = '';

    }
  }

  scrollToBottom(): void {

    try {
        this.scrollDown.nativeElement.scrollTop = this.scrollDown.nativeElement.scrollHeight;
    } catch(err) { }                 
}

  onInputPress(event) {
    console.log('currentUserList', this.currentUserList)
    this.messageInput  = event.target.value;
  }

}

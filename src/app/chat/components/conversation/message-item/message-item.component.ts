import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input() message;
  @Input() isOwnMessage;

  constructor() { }

  ngOnInit(): void {
  }

}

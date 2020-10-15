import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { RoomListItemComponent } from './components/room-list/room-list-item/room-list-item.component';
import { ConversationComponent } from './components/conversation/conversation.component';
import { MessageItemComponent } from './components/conversation/message-item/message-item.component';
import { SharedModule } from '../shared/shared.module';
import { AddRoomDialogComponent } from './components/dialogs/add-room-dialog/add-room-dialog.component';
import { FormsModule } from '@angular/forms';
import { UserListItemComponent } from './components/lobby/user-list-item/user-list-item.component';
import { AddUserComponent } from './components/dialogs/add-user/add-user.component';
import { SwitchUserComponent } from './components/dialogs/switch-user/switch-user.component';


@NgModule({
  declarations: [LobbyComponent, RoomListComponent, RoomListItemComponent, ConversationComponent, MessageItemComponent, AddRoomDialogComponent, UserListItemComponent, AddUserComponent, SwitchUserComponent],
  entryComponents: [AddRoomDialogComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule,
    FormsModule 
  ]
})
export class ChatModule { }

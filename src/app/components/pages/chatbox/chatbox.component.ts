import { Component, OnInit } from '@angular/core';
import { friends } from '../../../mock/friends';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./../../../styles/pages/_chatbox.scss']
})
export class ChatboxComponent implements OnInit {
  chatFriends: any;
  elementChatterName: any;
  chatTarget: any = {
    id: null,
    name: ''
  };

  constructor() { }

  ngOnInit() {
    this.initElementSelector();
    this.getChatFriends();
  }

  initElementSelector() {
    this.elementChatterName = document.getElementById('chatter-name');
  }

  getChatFriends() {
    // replace with api calling later
    this.chatFriends = friends;
  }

  displayFriendChats(id: number) {
    this.elementChatterName.style.padding = '10px';
    this.elementChatterName.style.display = 'block';

    const chatterInfo = this.chatFriends.find(
      (friend: any) => {
        return friend.id === id;
      }
    );
    this.chatTarget = chatterInfo;
  }


}

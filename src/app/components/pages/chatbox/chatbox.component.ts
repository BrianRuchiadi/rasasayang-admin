import { Component, OnInit } from '@angular/core';
import { friends, userChatMock } from '../../../mock/friends';
import { NavigationSliderService } from '../../../services/utilities/navigation-slider.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./../../../styles/pages/_chatbox.scss']
})
export class ChatboxComponent implements OnInit {
  userId: any;
  chatFriends: any;
  chatTarget: any = {
    id: null,
    name: ''
  };
  newMessageString: any;
  chatLogs: any;

  elementContent: any;
  elementChatterName: any;
  elementChatLogsUl: any;

  scrollTopChatUl: any = 0;

  constructor(
    private navigationSliderService: NavigationSliderService
  ) { }

  ngOnInit() {
    this.initElementSelector();
    this.getChatFriends();
    this.observeBurgerState();

    this.userId = 100;
  }

  initElementSelector() {
    this.elementContent = document.getElementById('content');
    this.elementChatterName = document.getElementById('chatter-name');
    this.elementChatLogsUl = document.getElementById('chat-logs-ul');
  }


  observeBurgerState() {
    this.navigationSliderService.slideStateObservable.subscribe(
      (state) => {
        if (!state) {
          this.elementContent.style.animation = 'contentExpand 1s ease-in-out 1';
          setTimeout(() => this.elementContent.style.width = '100vw', 1000);
          return;
        }

        this.elementContent.style.animation = 'contentCollapse 1s ease-in-out 1';
        setTimeout(() => this.elementContent.style.width = 'calc(100vw - 200px)', 1000);
      }
    );
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
    this.loadUserChatLog(chatterInfo);
  }

  loadUserChatLog(chatterInfo) {
    // replace logic later
    this.chatLogs = userChatMock;
    this.scrollToLastMessage();
  }

  sendMessage(id: number) {
    if (!id) { throw new Error('No user is selected'); }
    if (!this.newMessageString) { throw new Error('No message is being typed'); }

    this.chatLogs.push({
      id: this.userId,
      message: this.newMessageString
    });

    this.scrollToLastMessage();
    this.newMessageString = '';
  }

  scrollToLastMessage() {
    this.scrollTopChatUl = this.elementChatLogsUl.scrollHeight;
  }


}

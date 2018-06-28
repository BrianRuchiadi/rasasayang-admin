import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./../../../styles/common/_topbar.scss']
})
export class TopbarComponent implements OnInit {
  emailContentClicked: any = false;
  notificationContentClicked: any = false;
  settingContentClicked: any = false;

  elementEmailContent: any;
  elementNotificationContent: any;
  elementSettingContent: any;

  constructor() {
  }

  ngOnInit() {
    this.initElementSelector();
  }

  initElementSelector() {
    this.elementEmailContent = document.getElementById('email-content');
    this.elementNotificationContent = document.getElementById('notification-content');
    this.elementSettingContent = document.getElementById('setting-content');
  }

  triggerContent(type) {
    this.elementEmailContent.style.display = 'none';
    this.elementNotificationContent.style.display = 'none';
    this.elementSettingContent.style.display = 'none';

    switch (type) {
      case 'email':
        this.notificationContentClicked = false;
        this.settingContentClicked = false;

        if (!this.emailContentClicked) {
          this.elementEmailContent.style.display = 'block';
          this.emailContentClicked = true;
        } else {
          this.emailContentClicked = false;
        }
        break;
      case 'notification':
        this.emailContentClicked = false;
        this.settingContentClicked = false;

        if (!this.notificationContentClicked) {
          this.elementNotificationContent.style.display = 'block';
          this.notificationContentClicked = true;
        } else {
          this.notificationContentClicked = false;
        }
        break;
      case 'setting':
        this.emailContentClicked = false;
        this.notificationContentClicked = false;

        if (!this.settingContentClicked) {
          this.elementSettingContent.style.display = 'block';
          this.settingContentClicked = true;
        } else {
          this.settingContentClicked = false;
        }
        break;
    }
  }

}

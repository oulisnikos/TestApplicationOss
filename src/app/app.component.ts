import {Component, NgZone} from '@angular/core';
import {Platform} from "@ionic/angular";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private platform: Platform,
    private ngZone: NgZone
  ) {
    this.initialApp();
  }

  initialApp() {
    if (this.platform.is('cordova')) {
      (window as any).handleOpenURL = (callbackUrl: any) => {
        console.log('🚀 ~ file: auth.factory.ts ~ line 20 ~ callbackUrl', callbackUrl);

        // this.ngZone.run(() => {
        //   if (callbackUrl.indexOf(authService.authConfig.redirect_url) === 0) {
        //     authService.authorizationCallback(callbackUrl);
        //   } else {
        //     authService.endSessionCallback();
        //   }
        // });
      };
    }
  }
}

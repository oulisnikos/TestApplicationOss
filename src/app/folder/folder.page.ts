import {Component, Inject, inject, LOCALE_ID, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  private _path = "gr.test.application02://posts/blbla"
  // private activatedRoute = inject(ActivatedRoute);
  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private iab: InAppBrowser,
    private router: Router
  ) {}

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log("This is the callback url ", this.router.url);
  }

  getApplicationPath() {
    const amountL = "1200";
    const tipL = "50";
    const callback = "gr.test.application01://result";
    const merchantKey = "fb6d0df7-b43d-45fe-90bb-8a2ae092d05a";
    const appId = "gr.test.application01";
    const action = "sale";
    const paymentMethod = "CardPresent";
    const receipt = true;
    const rating = false;
    const result = false;
    const installments = false;
    const prefInstallments = "";

    const deeplinkPath = "vivapayclient://pay/v1"
      + "?merchantKey=" + merchantKey
      + "&appId=" + appId
      + "&action=" + action
      + "&amount=" + amountL
      + "&tipAmount=" + tipL
      + "&show_receipt=" + receipt
      + "&show_rating=" + rating
      + "&show_transaction_result=" + result
      + "&withInstallments=" + installments
      + "&preferredInstallments=" + prefInstallments
      + "&paymentMethod=" + paymentMethod
      + "&callback=" + callback;

    return deeplinkPath;
  }

  onButtonSystem() {
    const date = new Date("2021-03-18T17:07:51.1888432+02:00");
    console.log(this.locale)//formatDate(date, "yyyy-MM-ddTHH:mm:ssZ", "el"));
    //formatDate(date, "yyyy-MM-ddTHH:mm:ss.sssssssZ", "")
    //this.createBrowsert({path: this.getApplicationPath(), target: "_system"});
  }

  onButtonBlank() {
    this.createBrowsert({path: this.getApplicationPath(), target: "_blank"});
  }

  createBrowsert(option: any)
  {
    this.iab.create(option.path, option.target);
  }
}

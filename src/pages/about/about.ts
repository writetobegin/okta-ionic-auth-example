import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OAuthService } from 'angular-oauth2-oidc';
 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public oauthService: OAuthService) {

  }

  get getToken() {
    const token: any = this.oauthService.getAccessToken();
    if (!token) {
      return null;
    }
    return token;
  }
}

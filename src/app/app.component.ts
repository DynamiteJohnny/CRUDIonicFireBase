import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBp1wtXqRrEijITzmXeDHpGklC6RNVL6PY",
  authDomain: "niunamas-5e9a0.firebaseapp.com",
  databaseURL: "https://niunamas-5e9a0.firebaseio.com",    projectId: "niunamas-5e9a0",
  storageBucket: "niunamas-5e9a0.appspot.com",
  messagingSenderId: "34538415290"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

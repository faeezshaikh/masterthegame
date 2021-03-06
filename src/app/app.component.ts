import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { ContactusPage } from '../pages/contactus/contactus';
import { ResourcesPage } from '../pages/resources/resources';

import { GoogleAnalytics } from '@ionic-native/google-analytics';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListPage;

  pages: Array<{title: string, component: any,icon: string}>;

  constructor(public platform: Platform,private ga: GoogleAnalytics) {
   this.initializeApp();

   this.ga.startTrackerWithId('UA-123713684-1')
   .then(() => {
     console.log('Google analytics is ready now');
        this.ga.trackView('App.component.ts');
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Projects', component: ListPage, icon: 'list' },
      // { title: 'Video Resources', component: ListPage, icon: 'logo-youtube' },
      { title: 'Reference Resources', component: ResourcesPage, icon: 'folder' },
      { title: 'Contact Us', component: ContactusPage, icon: 'people' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

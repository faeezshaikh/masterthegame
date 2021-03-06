import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { CreatePage } from '../pages/create/create';
import { ListPage } from '../pages/list/list';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http'; 

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HelperProvider } from '../providers/helper/helper';
import { FormPage } from '../pages/form/form';
import { DetailsPage } from '../pages/details/details';
import { ContactusPage } from '../pages/contactus/contactus';
import { ResourcesPage } from '../pages/resources/resources';
import { Ng2OdometerModule } from 'ng2-odometer'; 
import { GoogleAnalytics } from '@ionic-native/google-analytics';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyD97RFFjDIvSMFADiVmLv_nMpViatvh2jQ",
  authDomain: "ameren-arb.firebaseapp.com",
  databaseURL: "https://ameren-arb.firebaseio.com",
  projectId: "ameren-arb",
  storageBucket: "ameren-arb.appspot.com",
  messagingSenderId: "292827807008"
};

@NgModule({
  declarations: [
    MyApp,
    CreatePage,
    ListPage,
    FormPage,
    DetailsPage,
    ContactusPage,
    ResourcesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    Ng2OdometerModule.forRoot(),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreatePage,
    ListPage,
    FormPage,
    DetailsPage,
    ContactusPage,
    ResourcesPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HelperProvider,
    GoogleAnalytics
  ]
})
export class AppModule {}

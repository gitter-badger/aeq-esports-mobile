import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ApplicationsPage } from "../pages/applications/applications";
import { ApplicationsPopoverPage } from "../pages/applications/applications-popover/applications-popover";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { ActiveGamesService } from "../services/active-games.service";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ApplicationsSearchPage } from "../pages/applications/applications-search/applications-search";
import { ApplicationService } from "../services/application.service";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ApplicationsPage,
    ApplicationsPopoverPage,
    ApplicationsSearchPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ApplicationsPage,
    ApplicationsPopoverPage,
    ApplicationsSearchPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActiveGamesService,
    ApplicationService
  ]
})
export class AppModule {
}

import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ApplicationsPage } from "../applications/applications";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToApplications() {
    this.navCtrl.push(ApplicationsPage);
  }

}

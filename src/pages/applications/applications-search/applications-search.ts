import { Component, OnInit } from "@angular/core";
import { Application, composedGameString } from "../../../models/application";
import { PopoverController, ViewController } from "ionic-angular";
import { ApplicationService } from "../../../services/application.service";
import { ApplicationsPopoverPage } from "../applications-popover/applications-popover";
import { ApplicationFilterOptions } from "../../../models/application-filter-options";
import { ActiveGamesService } from "../../../services/active-games.service";

@Component({
  selector: 'page-applications-search',
  templateUrl: 'applications-search.html'
})
export class ApplicationsSearchPage implements OnInit {

  items: Application[] = [];

  activeGames: string[];

  constructor(public viewCtrl: ViewController,
              public popoverCtrl: PopoverController,
              public applicationService: ApplicationService,
              public gamesService: ActiveGamesService) {
  }

  ngOnInit() {
    this.items = this.applicationService.getApplications();
    this.gamesService.activeGames.subscribe((games) => {
      this.activeGames = games;
      this.filterItems();
    });
  }

  /**
   * Applied the filters options specified in this component.
   */
  filterItems() {
    let options: ApplicationFilterOptions = {
      games: this.activeGames
    };
    this.items = this.applicationService.getFilteredApplications(options);
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  getGamesString(item: Application) {
    return composedGameString(item);
  }

  /**
   * Presents the 'more options' popover.
   *
   * @param event the event that triggered this action
   */
  presentPopover(event) {
    let popover = this.popoverCtrl.create(ApplicationsPopoverPage);
    popover.present({
      ev: event
    });
  }

}

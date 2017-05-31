import { Component, OnInit, ViewChild } from "@angular/core";
import { Content, ModalController, NavController, PopoverController } from "ionic-angular";
import { ApplicationsPopoverPage } from "./applications-popover/applications-popover";
import { Application } from "../../models/application";
import { ActiveGamesService } from "../../services/active-games.service";
import { ApplicationsSearchPage } from "./applications-search/applications-search";
import { ApplicationService } from "../../services/application.service";
import { ApplicationFilterOptions } from "../../models/application-filter-options";

@Component({
  selector: 'page-applications',
  templateUrl: 'applications.html'
})
export class ApplicationsPage implements OnInit {

  /**
   * Whether the data is currently loading.
   */
  loading: boolean = false;

  /**
   * Type used to display the segments.
   */
  type: string = 'new';

  /**
   * Complete list of applications.
   */
  items: Application[] = [];

  activeGames: string[] = [];

  @ViewChild(Content) content;

  /**
   * Whether 'timed out' applications are visible in the 'pending' tab.
   */
  timedOutVisible: boolean = true;
  /**
   * Whether 'needs feedback' applications are visible in the 'pending' tab.
   */
  needsFeedbackVisible: boolean = true;

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController,
              private gamesService: ActiveGamesService,
              public modalCtrl: ModalController,
              public applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.loadItems();
    this.content.resize();
    this.gamesService.activeGames.subscribe((games) => {
      this.activeGames = games;
      this.filterItems();
    });
  }

  /**
   * Loads the list of applications, delegated to the specified service.
   */
  loadItems() {
    // TODO remove dummy implementation and load items from the applications service
    this.loading = true;
    setTimeout(() => {
      this.filterItems();
      this.loading = false;
    }, 1500);
  }

  /**
   * Applied the filters options specified in this component.
   */
  filterItems() {
    let options: ApplicationFilterOptions = {
      status: this.type,
      games: this.activeGames
    };
    this.items = this.applicationService.getFilteredApplications(options);
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

  /**
   * Presents the 'search' modal.
   */
  presentSearchModal() {
    let modal = this.modalCtrl.create(ApplicationsSearchPage);
    modal.present();
  }

  /**
   * Refreshes the list of items by calling the appropriate service.
   *
   * @param event the event that triggered this action
   */
  doRefresh(event) {
    // TODO implement refresh
    setTimeout(() => {
      console.warn('refresh has not been implemented yet')
      event.complete();
    }, 1000);
  }

  /**
   * Toggles the visibility of the 'timed out' group within the 'pending' tab.
   */
  toggleTimedOutVisible() {
    this.timedOutVisible = !this.timedOutVisible;
  }

  /**
   * Toggles the visibility of the 'needs feedback' group within the 'pending' tab.
   */
  toggleNeedsFeedbackVisible() {
    this.needsFeedbackVisible = !this.needsFeedbackVisible;
  }

}

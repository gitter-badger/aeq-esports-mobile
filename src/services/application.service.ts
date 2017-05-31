import { Injectable } from "@angular/core";
import { Application } from "../models/application";
import { APPLICATIONS } from "../data/applications";
import { ApplicationFilterOptions } from "../models/application-filter-options";

@Injectable()
export class ApplicationService {

  private items: Application[] = [];

  constructor() {
    this.items = APPLICATIONS;
  }

  /**
   * Returns a list of all applications.
   *
   * @returns {Application[]} the list of applications
   */
  getApplications(): Application[] {
    return this.items;
  }

  /**
   * Returns a list of filtered applications, as specified by the options.
   *
   * @param options the filter options to be applied
   * @returns {Application[]} the resulting list of applications
   */
  getFilteredApplications(options: ApplicationFilterOptions): Application[] {
    let filteredItems: Application[] = this.items;
    if (options.status) {
      filteredItems = filteredItems.filter((v) => v.status == options.status);
    }
    if (options.games) {
      filteredItems = filteredItems.filter((v) => {
        return v.games.some((g) => options.games.indexOf(g) >= 0);
      });
    }
    return filteredItems;
  }

}

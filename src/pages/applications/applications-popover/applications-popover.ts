import { Component, OnInit } from "@angular/core";
import { ViewController } from "ionic-angular";
import { ActiveGamesService } from "../../../services/active-games.service";

@Component({
  selector: 'page-applications-popover',
  templateUrl: 'applications-popover.html'
})
export class ApplicationsPopoverPage implements OnInit {

  games: string[] = [];
  gameStates: boolean[] = [];

  constructor(public viewCtrl: ViewController,
              private gamesService: ActiveGamesService) {
  }

  ngOnInit() {
    this.gamesService.getGameStates().forEach((e) => {
      this.games.push(e.name);
      this.gameStates.push(e.active);
    });
  }

  updateSelectedGame(index) {
    this.gamesService.patchGameState(this.games[index], this.gameStates[index]);
  }

}

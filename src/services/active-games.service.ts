import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { GameState } from "../models/game-state";

@Injectable()
export class ActiveGamesService {

  private _activeGames: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);

  public readonly activeGames: Observable<string[]> = this._activeGames.asObservable();

  games: string[] = [
    'League of Legends',
    'CS:GO'
  ];

  gameStates: { [key: string]: boolean } = {};

  constructor() {
    this.games.forEach((e) => this.patchGameState(e, true));
  }

  getGames(): string[] {
    return this.games;
  }

  getGameStates(): GameState[] {
    let array: GameState[] = [];
    Object.keys(this.gameStates).forEach((e) => {
      array.push({name: e, active: this.gameStates[e]});
    });
    return array;
  }

  private getActiveGames(): string[] {
    return Object.keys(this.gameStates).filter((e) => this.gameStates[e]);
  }

  patchGameState(name: string, active: boolean) {
    this.gameStates[name] = active;
    this._activeGames.next(this.getActiveGames());
  }

}

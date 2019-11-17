import { IAnalyzer } from "../interfaces";
import { parsedMatchData, Results } from "../utils";

export class WinAnalyzer implements IAnalyzer {
  constructor(public teamName: string) {}

  public run(matches: parsedMatchData[]): string {
    let wins = 0;
    for (const match of matches) {
      if (match[1] === "New Castle" && match[5] === Results.homeWin) {
        wins++;
      } else if (match[2] === "New Castle" && match[5] === Results.awayWin) {
        wins++;
      }
    }
    return `team ${this.teamName} wins ${wins} games`;
  }
}

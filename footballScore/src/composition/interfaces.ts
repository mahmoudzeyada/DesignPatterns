import { parsedMatchData } from "./utils";

export interface IAnalyzer {
  run(matches: parsedMatchData[]): string;
}

export interface IOutputTarget {
  print(report: string): void;
}

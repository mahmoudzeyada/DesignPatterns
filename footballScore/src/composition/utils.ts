import { type } from "os";

export enum Results {
  homeWin = "H",
  awayWin = "A",
  draw = "D"
}

export const dateStringToDate = (value: string): Date => {
  const dateParts = value.split("/").map((item: string): number => {
    return parseInt(item, 10);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

export type parsedMatchData = [
  Date,
  string,
  string,
  number,
  number,
  Results,
  string
];

export interface IDataReader {
  data: string[][];
  read(): void;
}

import fs from "fs";
import { IDataReader } from "./utils";

export class CsvFileReader implements IDataReader {
  public data: string[][] = [];

  constructor(public filename: string) {}

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .splice(1);
  }
}

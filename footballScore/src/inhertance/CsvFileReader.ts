import fs from "fs";

export abstract class CsvFileReader<T> {
  public data: T[] = [];

  constructor(public filename: string) {}

  public abstract mapFunction(row: string[]): T;

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .splice(1)
      .map(this.mapFunction);
  }
}

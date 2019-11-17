import { CsvFileReader } from "./CsvFileReader";
import {
  parsedMatchData,
  dateStringToDate,
  Results,
  IDataReader
} from "./utils";

export class MatchReader {
  public static defaultFileReader(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  public matches: parsedMatchData[] = [];
  constructor(public reader: IDataReader) {}

  public load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): parsedMatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 10),
          parseInt(row[4], 10),
          row[5] as Results,
          row[6]
        ];
      }
    );
  }
}
